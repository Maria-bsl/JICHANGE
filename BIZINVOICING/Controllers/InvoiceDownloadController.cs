﻿using iTextSharp.text;
using iTextSharp.text.pdf;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;
using QRCoder;
using System.Drawing;
using System.Drawing.Imaging;
using Image = iTextSharp.text.Image;
using System.Text.RegularExpressions;
using BL.BIZINVOICING.BusinessEntities.Common;
using BL.BIZINVOICING.BusinessEntities.Masters;
using BL.BIZINVOICING.BusinessEntities.ConstantFile;
using System.Net;
using System.Net.Http;
using System.Security.Cryptography;
using System.Security.Cryptography.X509Certificates;
using Newtonsoft.Json;
using System.Threading.Tasks;
using System.Web.Script.Serialization;
using System.Globalization;
using System.Xml;
using Newtonsoft.Json.Linq;
using System.Configuration;
using System.Data.SqlClient;
using System.Net.Mail;


namespace BIZINVOICING.Controllers
{
    public class InvoiceDownloadController : LangcoController
    {
        #region Global Declrations
        string strConnString = ConfigurationManager.ConnectionStrings["SchCon"].ToString();
        CustomerMaster cm = new CustomerMaster();
        CompanyBankMaster c = new CompanyBankMaster();
        S_SMTP smtp = new S_SMTP();
        INVOICE inv = new INVOICE();
        TRARegistration tra = new TRARegistration();
        APIReg areg = new APIReg();
        Token tok = new Token();
        string f_Path = System.Web.Configuration.WebConfigurationManager.AppSettings["FileP"].ToString();
        public string ack = string.Empty;
        public string ackm = string.Empty;
        public string CustID = string.Empty;
        public string CustNo = string.Empty;
        #endregion

        // Get Invoice Data Download-- Madhu  on 05/01/2021
        #region PDF Download Page
        
        public ActionResult InvoiceDownload(int Id,int ? rst)
        {
            if (Session["sessComp"] == null)
            {
                return RedirectToAction("Loginnew", "Loginnew");
            }
            String temp = String.Format(new CultureInfo("en-US"), "{0:C0}", 10000000).Replace("$", "");
            
            // TRAPDFDOWnload(1);
            InvoicePDfData inovoicedata = new InvoicePDfData();
            int invoicenumber = Id;
            inovoicedata = inv.GetINVOICEpdf(invoicenumber);
            inovoicedata.AmountWords = changeToWords(inovoicedata.Item_Total_Amount.ToString(), false).ToString();
            inovoicedata.InvoiceItemlist = inv.GetInvoiceDetails(invoicenumber);
            inovoicedata.Vat_Percentage = inovoicedata.InvoiceItemlist[0].Vat_Percentage == null ? 0 : inovoicedata.InvoiceItemlist[0].Vat_Percentage;

            inovoicedata.InvoiceItemlist.ForEach(item =>
            {
                var rr = String.Format(new CultureInfo("en-US"), "{0:C0}", item.Item_Total_Amount).Replace("$", "");
                item.Item_Total_Amount = Convert.ToDecimal(rr);// Convert.ToDecimal(string.Format("{0:#,0.00}", item.Item_Total_Amount));
            });
            //Qrcode("test");
            //Index_Post();
            DateTime invdate = DateTime.Parse(inovoicedata.Invoice_Date.ToString());
            string invnewdate = invdate.ToString("dd-MMM-yyyy");

            ViewBag.Date = invnewdate; //DateTime.Now.ToString("dd-MMM-yyyy");
            ViewBag.Id = invoicenumber;

            /*if(rst==-1)
            {
                ViewBag.result = -1;
            }
            else {
                ViewBag.result = 0;
            }*/
            ViewBag.result = rst;

            return View(inovoicedata);
        }

        #endregion

        #region Without Sign
        public void InvoiceSignDownload(int Id)
        {
            TRAPDFDOWnload(Id);
        }

       
        public void InvoicePDFDownload(int Id)
        {

            //genrate Qr code with url 
            /*#region QRCODE 
            var image64 = "";

            string link = Utilites.QR_URL + "" + "_" + ""; //recipt sucess time and RCtv

            //string link = "https://virtual.tra.go.tz/efdmsRctVerify/2E9LT636_172901"; //recipt sucess time and RCtv
            using (MemoryStream ms = new MemoryStream())
            {
                QRCodeGenerator qrGenerator = new QRCodeGenerator();
                QRCodeGenerator.QRCode qrCode = qrGenerator.CreateQrCode(link, QRCodeGenerator.ECCLevel.Q);
                using (Bitmap bitMap = qrCode.GetGraphic(20))
                {
                    bitMap.Save(ms, ImageFormat.Jpeg);
                    image64 = Convert.ToBase64String(ms.ToArray());
                    ViewBag.QRCodeImage = "data:image/png;base64," + Convert.ToBase64String(ms.ToArray());
                }
            }
            #endregion*/
            string path = System.Web.Configuration.WebConfigurationManager.AppSettings["FilePathPDF"].ToString();
            //TO get invoice information
            InvoicePDfData inovoicedata = new InvoicePDfData();
            TRARegistration objtra = new TRARegistration();

            int invoicenumber = Id;
            inovoicedata = inv.GetINVOICEpdf(invoicenumber);
            inovoicedata.AmountWords = changeToWords(inovoicedata.Item_Total_Amount.ToString(), false).ToString();
            inovoicedata.InvoiceItemlist = inv.GetInvoiceDetails(invoicenumber);
            inovoicedata.Vat_Percentage = inovoicedata.InvoiceItemlist[0].Vat_Percentage;

            #region PDF Genration
            iTextSharp.text.Font fontTinyItalic = FontFactory.GetFont("Arial", 9, iTextSharp.text.Font.NORMAL, BaseColor.BLACK);
            iTextSharp.text.Font fontTinyItalic1 = FontFactory.GetFont("Arial", 9, iTextSharp.text.Font.NORMAL, BaseColor.WHITE);
            iTextSharp.text.Font Header = FontFactory.GetFont("Arial", 9, iTextSharp.text.Font.BOLD, BaseColor.BLACK);

            Paragraph ph;

            Document pdfDoc = new Document(PageSize.A4, 25, 25, 15, 15);
            PdfWriter pdfWriter = PdfWriter.GetInstance(pdfDoc, Response.OutputStream);

            //string pdfFile = path + inovoicedata.Inv_Mas_Sno + ".pdf";
            //PdfWriter pdfWriter = PdfWriter.GetInstance(pdfDoc, new FileStream(pdfFile, FileMode.Create));
            //pdfWriter = PdfWriter.GetInstance(pdfDoc, Response.OutputStream);
            pdfDoc.Open();

            //string pdfFile = f_Path + "/Receipts/" + vp.Permit_Application_No + ".pdf";
            //PdfWriter writer = PdfWriter.GetInstance(myDoc, new FileStream(pdfFile, FileMode.Create));

            //Top Heading
            Chunk chunk = new Chunk("Complete It Solutions", FontFactory.GetFont("Arial", 14, iTextSharp.text.Font.BOLDITALIC, BaseColor.BLACK));
            //pdfDoc.Add(chunk);

            //Horizontal Line
            //Paragraph line = new Paragraph(new Chunk(new iTextSharp.text.pdf.draw.LineSeparator(0.0F, 100.0F, BaseColor.BLACK, Element.ALIGN_LEFT, 1)));
            //pdfDoc.Add(line);

            //Table
            PdfPTable table = new PdfPTable(3);
            table.WidthPercentage = 100;
            //0=Left, 1=Centre, 2=Right
            table.HorizontalAlignment = 1;
            table.SpacingBefore = 5f;
            table.SpacingAfter = 1f;

            int[] firstTablecellwidth = { 50, 25, 25 };
            table.SetWidths(firstTablecellwidth);

            //Cell no 1
            PdfPCell cell = new PdfPCell();
            //cell.Border = 0;
            //Image image = Image.GetInstance(Server.MapPath("/Content/Upload/newbizlogo-120x59.jpg"));
            //image.ScaleAbsolute(50, 50);
            //cell.AddElement(image);
            //table.AddCell(cell);

            //chunk = new Chunk(inovoicedata.CompName + "\n P.O.Box:" + inovoicedata.CompPostBox + "\n " + inovoicedata.CompAddress + "\n" + " TEL : " + inovoicedata.CompTelNo + " " + "FAX :" + inovoicedata.CompFaxNo + "\n MOB : " + inovoicedata.CompMobNo + "\n" + "EMAIL:" + inovoicedata.CompEmail + " \n VATNO:" + inovoicedata.CompVatNo + " TIN NO:" + inovoicedata.TinNo + "", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK));
            chunk = new Chunk(inovoicedata.CompName + "", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.WHITE));
            cell = new PdfPCell();
            cell.Border = 0;
            cell.BackgroundColor = BaseColor.BLUE;
            cell.AddElement(chunk);
            cell.Padding = 9;
            table.AddCell(cell);

            chunk = new Chunk(" ", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK));

            cell = new PdfPCell();
            cell.Border = 0;
            cell.BackgroundColor = BaseColor.BLUE;
            cell.AddElement(chunk);
            cell.Padding = 9;
            table.AddCell(cell);

            ph = new Paragraph("INVOICE  ", fontTinyItalic1);
            //ph = BaseColor.WHITE;
            ph.Alignment = Element.ALIGN_RIGHT;
            chunk = new Chunk("INVOICE " + " ", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.WHITE));
            cell = new PdfPCell();
            cell.Border = 0;
            cell.BackgroundColor = BaseColor.BLUE;
            cell.Padding = 9;
            cell.AddElement(ph);
            table.AddCell(cell);

            table.SpacingAfter = 5f;

            //chunk = new Chunk(inovoicedata.CompName + "\n P.O.Box:" + inovoicedata.CompPostBox + "\n " + inovoicedata.CompAddress + "\n" + " TEL : " + inovoicedata.CompTelNo + " " + "FAX :" + inovoicedata.CompFaxNo + "\n MOB : " + inovoicedata.CompMobNo + "\n" + "EMAIL:" + inovoicedata.CompEmail + " \n VATNO:" + inovoicedata.CompVatNo + " TIN NO:" + inovoicedata.TinNo + "", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK));
            



            DateTime invdate = DateTime.Parse(inovoicedata.Invoice_Date.ToString());
            string invnewdate = invdate.ToString("dd-MMM-yyyy");

            //chunk = new Chunk(invnewdate + "\n \n \n  \n  \n   Invoice No: " + inovoicedata.Invoice_No + " ", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK));
            
            //chunk = new Chunk(invnewdate + "INVOICE " + " ", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK));
            
            //Add table to document
            pdfDoc.Add(table);

            table = new PdfPTable(1);
            table.WidthPercentage = 100;
            table.HorizontalAlignment = 2;
            table.SpacingBefore = 1f;
            table.SpacingAfter = 5f;

            chunk = new Chunk(inovoicedata.CompPostBox + " " + inovoicedata.CompAddress, FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK));
            cell = new PdfPCell();
            cell.Border = 0;
            cell.AddElement(chunk);
            table.AddCell(cell);

            //chunk = new Chunk(" TEL : " + inovoicedata.CompTelNo + " " + "FAX :" + inovoicedata.CompFaxNo + "\n MOB : " + inovoicedata.CompMobNo + "\n" + "EMAIL:" + inovoicedata.CompEmail + " \n VATNO:" + inovoicedata.CompVatNo + " TIN NO:" + inovoicedata.TinNo + "", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK));
            chunk = new Chunk("Tel: "+inovoicedata.CompMobNo + " FAX :" + inovoicedata.CompFaxNo, FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK));
            cell = new PdfPCell();
            cell.Border = 0;
            cell.AddElement(chunk);
            table.AddCell(cell);

            chunk = new Chunk(" Email :" + inovoicedata.CompEmail, FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK));
            cell = new PdfPCell();
            cell.Border = 0;
            cell.AddElement(chunk);
            table.AddCell(cell);

            chunk = new Chunk("VAT: " + inovoicedata.CompVatNo + " TIN :" + inovoicedata.TinNo, FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK));
            cell = new PdfPCell();
            cell.Border = 0;
            cell.AddElement(chunk);
            table.AddCell(cell);


            pdfDoc.Add(table);


            table = new PdfPTable(2);
            table.WidthPercentage = 100;
            //table.HorizontalAlignment = 2;
            table.SpacingBefore = 5f;

            cell = new PdfPCell();
            chunk = new Chunk(inovoicedata.Cust_Name + "", fontTinyItalic);
            cell.AddElement(chunk);
            cell.Border = 0;
            table.AddCell(cell);

            cell = new PdfPCell();
            ph = new Paragraph("Invoice #  " + inovoicedata.Invoice_No + " ", fontTinyItalic);
            ph.Alignment = Element.ALIGN_RIGHT;
            
            cell.AddElement(ph);
            cell.Border = 0;
            table.AddCell(cell);

            cell = new PdfPCell();
            chunk = new Chunk(inovoicedata.CustAddress + "", fontTinyItalic);
            cell.AddElement(chunk);
            cell.Border = 0;
            table.AddCell(cell);
            DateTime invd = (DateTime)inovoicedata.Invoice_Date;
            cell = new PdfPCell();
            ph = new Paragraph("Invoice Date  " + invd.ToString("dd/MM/yyyy") + " ", fontTinyItalic);
            ph.Alignment = Element.ALIGN_RIGHT;

            cell.AddElement(ph);
            cell.Border = 0;
            table.AddCell(cell);

            cell = new PdfPCell();
            chunk = new Chunk(inovoicedata.CustPhone + "", fontTinyItalic);
            cell.AddElement(chunk);
            cell.Border = 0;
            table.AddCell(cell);
            DateTime dued= new DateTime();
            if(inovoicedata.Invoice_Expired_Date != null)
            {
                dued = (DateTime)inovoicedata.Invoice_Expired_Date;
                
            }
            
            cell = new PdfPCell();
            if (inovoicedata.Invoice_Expired_Date != null)
            {
                ph = new Paragraph("Invoice Expired Date  " + dued.ToString("dd/MM/yyyy") + " ", fontTinyItalic);
            }
            else
            {
                ph = new Paragraph("", fontTinyItalic);
            }
                
            ph.Alignment = Element.ALIGN_RIGHT;

            cell.AddElement(ph);
            cell.Border = 0;
            table.AddCell(cell);


            cell = new PdfPCell();
            chunk = new Chunk(" ", fontTinyItalic);
            cell.AddElement(chunk);
            cell.Border = 0;
            table.AddCell(cell);
   
            cell = new PdfPCell();
            
            ph = new Paragraph("Control No "+inovoicedata.Control_No, fontTinyItalic);
            

            ph.Alignment = Element.ALIGN_RIGHT;

            cell.AddElement(ph);
            cell.Border = 0;
            table.AddCell(cell);

            cell = new PdfPCell();
            chunk = new Chunk(" ", fontTinyItalic);
            cell.AddElement(chunk);
            cell.Border = 0;
            table.AddCell(cell);

            cell = new PdfPCell();

            ph = new Paragraph("Currency: TZS ", fontTinyItalic);


            ph.Alignment = Element.ALIGN_RIGHT;

            cell.AddElement(ph);
            cell.Border = 0;
            table.AddCell(cell);








            pdfDoc.Add(table);

            //Horizontal Line
            Paragraph line = new Paragraph(new Chunk(new iTextSharp.text.pdf.draw.LineSeparator(0.0F, 100.0F, BaseColor.WHITE, Element.ALIGN_LEFT, 1)));
            pdfDoc.Add(line);

            /*Paragraph para1 = new Paragraph();
            para1.Add("Tax Invoice");
            para1.Alignment = Element.ALIGN_CENTER;
            para1.Font = Header;
            pdfDoc.Add(para1);*/

            //Table2
            table = new PdfPTable(4);
            table.WidthPercentage = 100;
            table.HorizontalAlignment = 2;
            table.SpacingBefore = 1f;
            table.SpacingAfter = 5f;
            //int[] firstTablecellwidths = { 10,10,30, 25, 25, };
            //table.SetWidths(firstTablecellwidths);


           


            

            //blak color
            cell = new PdfPCell();
            chunk = new Chunk("test", fontTinyItalic);
            cell.AddElement(chunk);

            cell.HorizontalAlignment = 30;
            cell.Colspan = 4;
            cell.BackgroundColor = BaseColor.BLACK;
            table.AddCell(cell);
            iTextSharp.text.Font heading = FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK);

            table.AddCell(new PdfPCell(new Paragraph("QTY", fontTinyItalic)) { HorizontalAlignment = Element.ALIGN_CENTER });
            table.AddCell(new PdfPCell(new Paragraph("DESCRIPTION", fontTinyItalic)) { HorizontalAlignment = Element.ALIGN_CENTER });
            table.AddCell(new PdfPCell(new Paragraph("UNIT PRICE" + "", fontTinyItalic)) { HorizontalAlignment = Element.ALIGN_CENTER });
            table.AddCell(new PdfPCell(new Paragraph("AMOUNT" +  "", fontTinyItalic)) { HorizontalAlignment = Element.ALIGN_CENTER });
            foreach (var item in inovoicedata.InvoiceItemlist)
            {
                table.AddCell(new PdfPCell(new Paragraph(item.Item_Qty.ToString(), fontTinyItalic)) { HorizontalAlignment = Element.ALIGN_RIGHT });
                table.AddCell(new PdfPCell(new Paragraph(item.Item_Description.ToString(), fontTinyItalic)));
                table.AddCell(new PdfPCell(new Paragraph(String.Format(new CultureInfo("en-US"), "{0:C0}", item.Item_Unit_Price).Replace("$", ""), fontTinyItalic)) { HorizontalAlignment = Element.ALIGN_RIGHT });
                table.AddCell(new PdfPCell(new Paragraph(String.Format(new CultureInfo("en-US"), "{0:C0}", item.Item_Qty * item.Item_Unit_Price).Replace("$", ""), fontTinyItalic)) { HorizontalAlignment = Element.ALIGN_RIGHT });
            }

            table.AddCell(" ");
            table.AddCell("");
            table.AddCell(" ");
            table.AddCell("");



            ph = new Paragraph("Total Amount  ", fontTinyItalic);
            ph.Alignment = Element.ALIGN_RIGHT;
            cell = new PdfPCell();
            chunk = new Chunk("Total Amount ", fontTinyItalic);
            //cell.PaddingLeft = 270;
            cell.AddElement(ph);
            cell.HorizontalAlignment = Element.ALIGN_RIGHT;
            cell.Colspan = 3;
            table.AddCell(cell);


            ph = new Paragraph(String.Format(new CultureInfo("en-US"), "{0:C0}", inovoicedata.Item_Total_Amount).Replace("$", ""), fontTinyItalic);
            ph.Alignment = Element.ALIGN_RIGHT;
            cell = new PdfPCell();
            chunk = new Chunk(String.Format(new CultureInfo("en-US"), "{0:C0}", inovoicedata.Item_Total_Amount).Replace("$", ""), fontTinyItalic);
            //cell.PaddingLeft = 65;
            cell.AddElement(ph);
            //cell.Colspan = 2;
            table.AddCell(cell);

            var dd = "Only";
            cell = new PdfPCell();
            chunk = new Chunk("Amount In words " +  ": " + inovoicedata.AmountWords.ToString() + "" + dd.ToString() + "", fontTinyItalic);
            cell.AddElement(chunk);

            cell.HorizontalAlignment = 40;
            cell.Colspan = 4;
            table.AddCell(cell);

            pdfDoc.Add(table);

            ph = new Paragraph("Remarks: "+inovoicedata.Remarks, fontTinyItalic);
            ph.Alignment = Element.ALIGN_LEFT;
            ph.SpacingAfter = 150f;
            pdfDoc.Add(ph);

            ph = new Paragraph("*********************System generated Invoice*************************", fontTinyItalic);
            ph.Alignment = Element.ALIGN_CENTER;
            ph.SpacingAfter = 20f;
            pdfDoc.Add(ph);

            ph = new Paragraph("How to Pay:", fontTinyItalic);
            ph.Alignment = Element.ALIGN_LEFT;
            ph.SpacingAfter = 20f;
            pdfDoc.Add(ph);

            /*cell = new PdfPCell();
            chunk = new Chunk("PAYMENT TERMS", fontTinyItalic);
            cell.HorizontalAlignment = 60;
            //cell.PaddingLeft = 100;
            cell.AddElement(chunk);
            cell.Colspan = 1;
            table.AddCell(cell);

            cell = new PdfPCell();
            chunk = new Chunk("" + inovoicedata.BankName.ToString() + ", Account No:" + inovoicedata.AccountNo.ToString() + ", " + inovoicedata.CompName.ToString() + "", fontTinyItalic);
            cell.AddElement(chunk);
            cell.Colspan = 4;
            table.AddCell(cell);

           

            cell = new PdfPCell();
            chunk = new Chunk("other remarks ", fontTinyItalic);
            cell.HorizontalAlignment = 40;
            cell.AddElement(chunk);
            cell.Colspan = 1;
            cell.Rowspan = 2;

            table.AddCell(cell);

            cell = new PdfPCell();
            chunk = new Chunk(inovoicedata.Remarks == null ? "" : inovoicedata.Remarks.ToString(), fontTinyItalic);
            cell.AddElement(chunk);
            cell.Colspan = 4;
            table.AddCell(cell);

            cell = new PdfPCell();
            chunk = new Chunk("");
            cell.AddElement(chunk);
            cell.Colspan = 4;
            table.AddCell(cell);
            pdfDoc.Add(table);*/

            //Table
            /*table = new PdfPTable(2);
            table.WidthPercentage = 100;
            table.HorizontalAlignment = 2;
            table.SpacingBefore = 10f;
            table.SpacingAfter = 10f;


            table.AddCell(new PdfPCell(new Paragraph("PAPERS PROCESSED BY", fontTinyItalic)));
            table.AddCell(new PdfPCell(new Paragraph("ORDER ACCEPTENCE BY CUSTOMER", fontTinyItalic)));
            table.AddCell(new PdfPCell(new Paragraph(" Name : " + inovoicedata.CompContactPerson.ToString() + "\n Desigination: Director,\n\n\n SIGNATURE", fontTinyItalic)));
            table.AddCell(new PdfPCell(new Paragraph("Name :  \n\n Signature& Date: ,\n companyStamp & Seal", fontTinyItalic)));
            table.AddCell(new PdfPCell(new Paragraph("Bizlogic", fontTinyItalic)));
            table.AddCell(new PdfPCell(new Paragraph("complete 'IT' Solutions", fontTinyItalic)));


            pdfDoc.Add(table);
            Paragraph para = new Paragraph();
            para.Add("");
            pdfDoc.Add(para);*/

            pdfWriter.CloseStream = false;
            pdfDoc.Close();
            Response.Buffer = true;
            Response.ContentType = "application/pdf";
            Response.AddHeader("content-disposition", "attachment;filename=Invoice-"+ inovoicedata.CompName+"-"+ inovoicedata.Invoice_No + ".pdf");
            Response.Cache.SetCacheability(HttpCacheability.NoCache);
            Response.Write(pdfDoc);
            Response.End();
            #endregion

        }

        #endregion


        #region For sign
        [HttpPost]
        public void TRAPDFDOWnload(int Id)
        {

            try { 
            string path = System.Web.Configuration.WebConfigurationManager.AppSettings["FilePathPDF"].ToString();
            //TO get invoice information
            InvoicePDfData inovoicedata = new InvoicePDfData();
            TRARegistration objtra = new TRARegistration();
            var gAPI = areg.getAPI();
            int invoicenumber = Id;
            inovoicedata = inv.GetINVOICEpdf(invoicenumber);
            //var getCust = inv.GetINVOICEpdf(invoicenumber);
            inovoicedata.AmountWords = changeToWords(inovoicedata.Item_Total_Amount.ToString(), false).ToString();
            inovoicedata.InvoiceItemlist = inv.GetInvoiceDetails(invoicenumber);
            inovoicedata.Vat_Percentage = inovoicedata.InvoiceItemlist[0].Vat_Percentage;

            long aNo = inovoicedata.Inv_Mas_Sno;
            //string path = f_Path + "/Invoices/";
            string fpath = path + aNo + ".pdf";
                #region samplecode
                /*string Rand = "12345678";
                Random random = new Random();
                string combination = "1234567890";
                StringBuilder captcha = new StringBuilder();
                for (int i = 0; i < 6; i++)
                    captcha.Append(combination[random.Next(combination.Length)]);
                Rand = captcha.ToString();
                    string fileLoc1 = @f_Path + "/XML_Sub/" + Rand + "_Reg.xml";
                    string fileLoc2 = @f_Path + "/XML_Sub/" + Rand + "_INV.xml";
                    string fileLoc3 = @f_Path + "/XML_Res/" + Rand + "_Reg.xml";
                    string fileLoc4 = @f_Path + "/XML_Res/" + Rand + "_INV.xml";
                    string fileLoc5 = @f_Path + "/XML_Token/" + Rand + "_req.xml";
                    string fileLoc6 = @f_Path + "/XML_Token/" + Rand + "_res.xml";*/
                // bool flag = true;
                /*if (System.IO.File.Exists(fpath))
                {

                    Response.Clear();
                    Response.ContentType = "application/pdf";
                    Response.AddHeader("content-disposition", "attachment;filename=" + "TRAInvoice" + aNo + ".pdf");
                    Response.TransmitFile(path + aNo + ".pdf");

                    Response.End();
                    //Response.Redirect("Invoice", true);
                    //return RedirectToAction("Invoice", "Invoice");

                    // Response.Headers.Clear();
                }

                else
                {*/
                #region InvoiceReg
                DataSet dsItems = new DataSet();
                DataSet dsItemsInvoice = new DataSet();

                /*var rslt = tra.GetTRAData(Convert.ToInt32(inovoicedata.TinNo));
                //.Where(x => x.tin_no == Convert.ToInt32(inovoicedata.TinNo)).ToList(); //checking if reg done or not
                if (rslt == null || rslt.Count() == 0)
                {
                    string sign = "<REGDATA><TIN>" + inovoicedata.TinNo + "</TIN><CERTKEY>" + gAPI.Cert_Key + "</CERTKEY></REGDATA>";
                    byte[] signature = Sign(sign, "CN="+gAPI.Test_CN);
                    string base64String = Convert.ToBase64String(signature);
                    string xml = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>";
                    xml = xml + "<EFDMS>";
                    xml = xml + sign;
                    xml = xml + "<EFDMSSIGNATURE>" + base64String + "</EFDMSSIGNATURE>";
                    xml = xml + "</EFDMS>";
                    FileStream fs1 = null;
                    if (!System.IO.File.Exists(fileLoc1))
                    {
                        using (fs1 = System.IO.File.Create(fileLoc1))
                        {
                            
                        }
                        System.IO.File.WriteAllText(fileLoc1, xml);
                        fs1.Close();
                    }
                        XmlDocument doc = new XmlDocument();
                        HttpWebRequest request = null;
                    try
                    {
                        request = (HttpWebRequest)WebRequest.Create(gAPI.RegIP_Test);
                        //var s = Convert.ToBase64String(Encoding.Default.GetBytes("747d90b923284aa2410e1086a9a6f947"));
                        request.Method = "POST";
                        request.ContentType = "application/xml";
                        request.Accept = "application/xml";
                        request.Headers["ContentType"] = "Application/xml";
                        request.Headers["Cert-Serial"] = Convert.ToBase64String(Encoding.Default.GetBytes(gAPI.Cert_Serial));
                        request.Headers["Client"] = "webapi";
                        byte[] signbytes;


                        signbytes = System.Text.Encoding.ASCII.GetBytes(xml);
                        Stream requestStream = request.GetRequestStream();
                        requestStream.Write(signbytes, 0, signbytes.Length);
                        requestStream.Close();
                        HttpWebResponse response;
                        response = (HttpWebResponse)request.GetResponse();
                        StreamReader sr = new StreamReader(response.GetResponseStream(), System.Text.Encoding.Default);
                        string backstr = sr.ReadToEnd();
                        doc.LoadXml(backstr);
                        sr.Close();
                        FileStream fs2 = null;
                        if (!System.IO.File.Exists(fileLoc3))
                        {
                            using (fs2 = System.IO.File.Create(fileLoc3))
                            {
                                //File.WriteAllText(fileLoc, rdata);
                            }
                            System.IO.File.WriteAllText(fileLoc3, backstr);
                            fs2.Close();
                        }
                        if (response.StatusCode == HttpStatusCode.OK)
                        {
                                //Stream responseStream = response.GetResponseStream();
                                //string responseStr = new StreamReader(responseStream).ReadToEnd();
                                //dsItems = DtXml(responseStr);
                                dsItems = DtXml(backstr);
                                var resultreg = AddRegData(dsItems, 0); //Data saving to DB


                        }


                    }
                    catch (Exception ex)
                    {
                            ex.ToString();
                    }
                }*/

                /*List<TRARegistration> objlst = new List<TRARegistration>();
                objlst = tra.GetTRAData(Convert.ToInt32(inovoicedata.TinNo));
                long trasno = 0;
                var gsno = tra.GetData(Int32.Parse(inovoicedata.TinNo));
                if(gsno != null)
                {
                    trasno = gsno.reg_ack_sno;
                }
                //.Where(x => x.tin_no == Convert.ToInt32(inovoicedata.TinNo)).ToList();
                if (objlst.Count() > 0)
                {
                    foreach (var item in objlst)
                    {
                        objtra.ack_code = item.ack_code;
                        objtra.username = item.username;
                        objtra.password = item.password;
                        objtra.regid = item.regid;
                        objtra.serial = item.serial;
                        objtra.receiptcode = item.receiptcode;
                    }
                }*/
                #endregion

                //  DataTable dt = new DataTable();
                // DataRow row = dsItems.Tables[1].Rows[0];



                #region TokenGen
                //Get token value
                /*bool flagT = true;
                var tokenvalue = string.Empty;
                var gToken = tok.EditToken(objtra.username.ToString());
                if(gToken != null)
                {
                    DateTime dt = gToken.Created_Date;
                    DateTime cd = DateTime.Now;
                    TimeSpan TimeDifference = dt - cd;
                    if(TimeDifference.TotalHours > 23)
                    {
                        flagT = false;
                    }
                    else
                    {
                        flagT = true;
                    }
                }
                else
                {
                    flagT = false;
                }
                try
                {
                    if (flagT == false)
                    {
                        var token = GetToken(objtra.username.ToString(), objtra.password.ToString());
                        token.Wait();
                        string abc = "";
                        var resulttoken = token.Result;
                        var serializer = new JavaScriptSerializer();
                        dynamic obj = serializer.Deserialize(resulttoken, typeof(object));

                        //var reslt= obj.GetType().GetProperty("value");



                        foreach (var item in obj)
                        {

                            tokenvalue = item.Value;
                            break;
                        }


                    }
                    else
                    {
                        tokenvalue = gToken.Access_Token;
                    }

                }
                catch
                {

                }*/
                #endregion
                #endregion
                #region Data for Sign
                bool success = false;
                    bool STime = false;
                    /*var getDG = inv.getDGCount(invoicenumber);
                    long daiC = inv.GetDaily() + 1;
                    long graC = inv.GetMax() + 1;
                    if(getDG != null)
                    {
                        daiC = (long)getDG.daily_count;
                        graC = (long)getDG.grand_count;
                        STime = false;
                    }
                    else
                    {
                        STime = true;
                        UpdateInvoiceD(inovoicedata);
                    }*/
                    
                    
                    try
                {
                    var getD = inv.GetINVOICEpdf(invoicenumber);
                    #region somecomment
                    //HttpWebRequest requestnew = null;
                    /*string xml1 = "<RCT><DATE>" + getD.Posteddate.ToString("yyyy-MM-dd") + "</DATE><TIME>" + getD.Posteddate.ToString("HH:mm:ss") + "</TIME>";
                    xml1 = xml1 + "<TIN>" + inovoicedata.TinNo + "</TIN>";
                    xml1 = xml1 + "<REGID>" + objtra.regid.ToString() + "</REGID>"; //regstration data
                    xml1 = xml1 + "<EFDSERIAL>" + objtra.serial.ToString().ToString() + "</EFDSERIAL>"; //regstration data
                    if(inovoicedata.Customer_ID_Type == "TIN")
                    {
                        xml1 = xml1 + "<CUSTIDTYPE>" + "1" + "</CUSTIDTYPE><CUSTID>"+ inovoicedata.Customer_ID_No + "</CUSTID>";
                        CustID = "TIN";
                    }
                    else if (inovoicedata.Customer_ID_Type == "Driving License")
                    {
                        xml1 = xml1 + "<CUSTIDTYPE>" + "2" + "</CUSTIDTYPE><CUSTID>" + inovoicedata.Customer_ID_No + "</CUSTID>";
                        CustID = "Driving License";
                    }
                    else if (inovoicedata.Customer_ID_Type == "Voters Number")
                    {
                        xml1 = xml1 + "<CUSTIDTYPE>" + "3" + "</CUSTIDTYPE><CUSTID>" + inovoicedata.Customer_ID_No + "</CUSTID>";
                        CustID = "Voters Number";
                    }
                    else if (inovoicedata.Customer_ID_Type == "Passport")
                    {
                        xml1 = xml1 + "<CUSTIDTYPE>" + "4" + "</CUSTIDTYPE><CUSTID>" + inovoicedata.Customer_ID_No + "</CUSTID>";
                        CustID = "Passport";
                    }
                    else if (inovoicedata.Customer_ID_Type == "NID (National Identity)")
                    {
                        xml1 = xml1 + "<CUSTIDTYPE>" + "5" + "</CUSTIDTYPE><CUSTID>" + inovoicedata.Customer_ID_No + "</CUSTID>";
                        CustID = "NID (National Identity)";
                    }
                    else //if (inovoicedata.Customer_ID_Type == "NIL")
                    {
                            xml1 = xml1 + "<CUSTIDTYPE>" + "6" + "</CUSTIDTYPE><CUSTID></CUSTID>";
                            CustID = "NIL";
                    }
                    CustNo = inovoicedata.Customer_ID_No;
                    xml1 = xml1 + "<CUSTNAME>" + escapeXML(inovoicedata.Cust_Name) + "</CUSTNAME>";
                    xml1 = xml1 + "<MOBILENUM>" + inovoicedata.CustPhone + "</MOBILENUM>";
                    xml1 = xml1 + "<RCTNUM>" + graC + "</RCTNUM>";//customer auto number
                    xml1 = xml1 + "<DC>" + daiC + "</DC>"; //
                    xml1 = xml1 + "<GC>" + graC + "</GC>";//RCTNUM
                    xml1 = xml1 + "<ZNUM>" + getD.Posteddate.ToString("yyyy") + getD.Posteddate.ToString("MM") + getD.Posteddate.ToString("dd") + "</ZNUM>";
                    xml1 = xml1 + "<RCTVNUM>" + objtra.receiptcode.ToString() + graC + "</RCTVNUM>"; //reciptcode regstration data
                    int cnt = 0;
                    xml1 = xml1 + "<ITEMS>";
                    string vtype = string.Empty;
                    //decimal dtot = 0;
                    foreach (var item in inovoicedata.InvoiceItemlist)
                    {
                        cnt = cnt + 1;
                        if(item.Vat_Type == "A")
                        {
                            vtype = "1";
                        }
                        else if (item.Vat_Type == "B")
                        {
                            vtype = "2";
                        }
                        else if (item.Vat_Type == "C")
                        {
                            vtype = "3";
                        }
                        else if (item.Vat_Type == "D")
                        {
                            vtype = "4";
                        }
                        else if (item.Vat_Type == "E")
                        {
                            vtype = "5";
                        }
                        //xml1 = xml1 + "<ITEM><ID>" + item.Inv_Det_Sno.ToString() + "</ID>";
                        xml1 = xml1 + "<ITEM><ID>" + cnt + "</ID>";
                        xml1 = xml1 + "<DESC>" + escapeXML(item.Item_Description.ToString()) + "</DESC>";
                        xml1 = xml1 + "<QTY>" + item.Item_Qty.ToString() + "</QTY>";
                        xml1 = xml1 + "<TAXCODE>" + vtype + "</TAXCODE>";
                        //dtot = item.Item_Qty * item.Item_Unit_Price;//Math.Round(dtot,2)
                        xml1 = xml1 + "<AMT>" + item.Item_Total_Amount + "</AMT>";
                        xml1 = xml1 + "</ITEM>";
                    }
                    xml1 = xml1 + "</ITEMS>";
                    xml1 = xml1 + "<TOTALS><TOTALTAXEXCL>" + inovoicedata.Total_Without_Vt.ToString() + "</TOTALTAXEXCL>";//total withooutax
                    xml1 = xml1 + "<TOTALTAXINCL>" + inovoicedata.Item_Total_Amount.ToString() + "</TOTALTAXINCL>";//tota amt
                    xml1 = xml1 + "<DISCOUNT>" + "0.00" + "</DISCOUNT>";//
                    xml1 = xml1 + "</TOTALS>";
                    xml1 = xml1 + "<PAYMENTS><PMTTYPE>" + "INVOICE" + "</PMTTYPE>";
                    xml1 = xml1 + "<PMTAMOUNT>" + inovoicedata.Item_Total_Amount.ToString() + "</PMTAMOUNT>";//totalamoint
                    xml1 = xml1 + "</PAYMENTS>";
                    xml1 = xml1 + "<VATTOTALS>";
                    var vTotal = inv.GetVATTotal1(aNo,"A");
                    if (vTotal != null)
                    {
                        xml1 = xml1 + "<VATRATE>" + "A" + "</VATRATE>";
                        xml1 = xml1 + "<NETTAMOUNT>" + vTotal.Sum(a => a.Item_Without_vat) + "</NETTAMOUNT>";
                        xml1 = xml1 + "<TAXAMOUNT>" + vTotal.Sum(a => a.Vat_Amount) + "</TAXAMOUNT>";
                    }
                    vTotal = inv.GetVATTotal1(aNo, "B");
                    if (vTotal != null)
                    {
                        xml1 = xml1 + "<VATRATE>" + "B" + "</VATRATE>";
                        xml1 = xml1 + "<NETTAMOUNT>" + vTotal.Sum(a => a.Item_Without_vat) + "</NETTAMOUNT>";
                        xml1 = xml1 + "<TAXAMOUNT>" + vTotal.Sum(a => a.Vat_Amount) + "</TAXAMOUNT>";
                    }
                        vTotal = inv.GetVATTotal1(aNo, "C");
                    if (vTotal != null)
                    {
                        xml1 = xml1 + "<VATRATE>" + "C" + "</VATRATE>";
                        xml1 = xml1 + "<NETTAMOUNT>" + vTotal.Sum(a => a.Item_Without_vat) + "</NETTAMOUNT>";
                        xml1 = xml1 + "<TAXAMOUNT>" + vTotal.Sum(a => a.Vat_Amount) + "</TAXAMOUNT>";
                    }
                    vTotal = inv.GetVATTotal1(aNo, "D");
                    if (vTotal != null)
                    {
                        xml1 = xml1 + "<VATRATE>" + "D" + "</VATRATE>";
                        xml1 = xml1 + "<NETTAMOUNT>" + vTotal.Sum(a => a.Item_Without_vat) + "</NETTAMOUNT>";
                        xml1 = xml1 + "<TAXAMOUNT>" + vTotal.Sum(a => a.Vat_Amount) + "</TAXAMOUNT>";
                    }
                    vTotal = inv.GetVATTotal1(aNo, "E");
                    if (vTotal != null)
                    {
                        xml1 = xml1 + "<VATRATE>" + "E" + "</VATRATE>";
                        xml1 = xml1 + "<NETTAMOUNT>" + vTotal.Sum(a => a.Item_Without_vat) + "</NETTAMOUNT>";
                        xml1 = xml1 + "<TAXAMOUNT>" + vTotal.Sum(a => a.Vat_Amount) + "</TAXAMOUNT>";
                    }
                    xml1 = xml1 + "</VATTOTALS>";
                    xml1 = xml1 + "</RCT>";
                    byte[] signatures = Sign(xml1, "CN="+gAPI.Test_CN);
                    string base64StringInvoice = Convert.ToBase64String(signatures);

                    string xmlInvoice = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>";
                    xmlInvoice = xmlInvoice + "<EFDMS>";
                    xmlInvoice = xmlInvoice + xml1;
                    xmlInvoice = xmlInvoice + "<EFDMSSIGNATURE>" + base64StringInvoice + "</EFDMSSIGNATURE>";
                    xmlInvoice = xmlInvoice + "</EFDMS>";
                    FileStream fs3 = null;
                    if (!System.IO.File.Exists(fileLoc2))
                    {
                        using (fs3 = System.IO.File.Create(fileLoc2))
                        {

                        }
                        System.IO.File.WriteAllText(fileLoc2, xmlInvoice);
                        fs3.Close();
                    }*/
                    #endregion
                    string cno = string.Empty;
                    cno = invoicenumber.ToString().PadLeft(12, '0');
                    /*if (getDG != null)
                    {

                    }
                    else
                    {
                            //UpdateInvoice(inovoicedata);
                            inv.Inv_Mas_Sno = invoicenumber;
                            inv.daily_count = 0;// (int)daiC;
                            inv.grand_count = 0;// (int)graC;
                            inv.Control_No = "T" + cno;
                            inv.UpdateInvoiMasForTRA1(inv);
                    }*/
                    inv.Inv_Mas_Sno = invoicenumber;
                    inv.daily_count = 0;// (int)daiC;
                    inv.grand_count = 0;// (int)graC;
                    inv.Control_No = "T" + cno;
                    inv.UpdateInvoiMasForTRA1(inv);
                    UpdateInvoiceF(inovoicedata);
                    #region finalcomment
                    //HttpContext.Response.Write(xmlInvoice);
                    //HttpContext.Response.End();
                    /*if(ack == "18")
                    {
                        string sign = "<REGDATA><TIN>" + inovoicedata.TinNo + "</TIN><CERTKEY>" + gAPI.Cert_Key + "</CERTKEY></REGDATA>";
                        byte[] signature = Sign(sign, "CN=" + gAPI.Test_CN);
                        string base64String = Convert.ToBase64String(signature);
                        string xml = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>";
                        xml = xml + "<EFDMS>";
                        xml = xml + sign;
                        xml = xml + "<EFDMSSIGNATURE>" + base64String + "</EFDMSSIGNATURE>";
                        xml = xml + "</EFDMS>";
                        FileStream fs1 = null;
                        if (!System.IO.File.Exists(fileLoc1))
                        {
                            using (fs1 = System.IO.File.Create(fileLoc1))
                            {

                            }
                            System.IO.File.WriteAllText(fileLoc1, xml);
                            fs1.Close();
                        }
                        XmlDocument doc = new XmlDocument();
                        HttpWebRequest request = null;
                        try
                        {
                            request = (HttpWebRequest)WebRequest.Create(gAPI.RegIP_Test);
                            //var s = Convert.ToBase64String(Encoding.Default.GetBytes("747d90b923284aa2410e1086a9a6f947"));
                            request.Method = "POST";
                            request.ContentType = "application/xml";
                            request.Accept = "application/xml";
                            request.Headers["ContentType"] = "Application/xml";
                            request.Headers["Cert-Serial"] = Convert.ToBase64String(Encoding.Default.GetBytes(gAPI.Cert_Serial));
                            request.Headers["Client"] = "webapi";
                            byte[] signbytes;


                            signbytes = System.Text.Encoding.ASCII.GetBytes(xml);
                            Stream requestStream = request.GetRequestStream();
                            requestStream.Write(signbytes, 0, signbytes.Length);
                            requestStream.Close();
                            HttpWebResponse response;
                            response = (HttpWebResponse)request.GetResponse();
                            StreamReader sr = new StreamReader(response.GetResponseStream(), System.Text.Encoding.Default);
                            string backstr = sr.ReadToEnd();
                            doc.LoadXml(backstr);
                            sr.Close();
                            FileStream fs2 = null;
                            if (!System.IO.File.Exists(fileLoc3))
                            {
                                using (fs2 = System.IO.File.Create(fileLoc3))
                                {
                                    //File.WriteAllText(fileLoc, rdata);
                                }
                                System.IO.File.WriteAllText(fileLoc3, backstr);
                                fs2.Close();
                            }
                            if (response.StatusCode == HttpStatusCode.OK)
                            {
                                //Stream responseStream = response.GetResponseStream();
                                //string responseStr = new StreamReader(responseStream).ReadToEnd();
                                //dsItems = DtXml(responseStr);
                                dsItems = DtXml(backstr);
                                var resultreg = AddRegData(dsItems,trasno); //Data saving to DB


                            }


                        }
                        catch (Exception ex)
                        {
                            ex.ToString();
                        }
                    }
                    if (ack == "7")
                    {
                        requestnew = (HttpWebRequest)WebRequest.Create(gAPI.InvIP_Test);
                        //var s = Convert.ToBase64String(Encoding.Default.GetBytes("747d90b923284aa2410e1086a9a6f947"));
                        requestnew.Method = "POST";
                        requestnew.ContentType = "application/xml";
                        requestnew.Accept = "application/xml";
                        requestnew.Headers["ContentType"] = "Application/xml";
                        requestnew.Headers["Routing-Key"] = "vfdrct";
                        requestnew.Headers["Cert-Serial"] = Convert.ToBase64String(Encoding.Default.GetBytes(gAPI.Cert_Serial));
                        requestnew.Headers["Authorization"] = "bearer " + tokenvalue.ToString();
                        byte[] bytesinvoice;
                        XmlDocument doc = new XmlDocument();
                        string responseStrinv = string.Empty;
                        bytesinvoice = System.Text.Encoding.ASCII.GetBytes(xmlInvoice);
                        Stream requestStreamnew = requestnew.GetRequestStream();
                        requestStreamnew.Write(bytesinvoice, 0, bytesinvoice.Length);
                        requestStreamnew.Close();
                        HttpWebResponse response;
                        response = (HttpWebResponse)requestnew.GetResponse();
                        StreamReader sr = new StreamReader(response.GetResponseStream(), System.Text.Encoding.Default);
                        string backstr = sr.ReadToEnd();
                        doc.LoadXml(backstr);
                        sr.Close();
                        FileStream fs4 = null;
                        if (!System.IO.File.Exists(fileLoc4))
                        {
                            using (fs4 = System.IO.File.Create(fileLoc4))
                            {
                                //File.WriteAllText(fileLoc, rdata);
                            }
                            System.IO.File.WriteAllText(fileLoc4, backstr);
                            fs4.Close();
                        }
                        if (response.StatusCode == HttpStatusCode.OK)
                        {
                            //Stream responseStream = response.GetResponseStream();
                            //responseStrinv = new StreamReader(responseStream).ReadToEnd();
                            // return responseStr;
                            //dsItemsInvoice = DtXml(responseStrinv);
                            dsItemsInvoice = DtXml(backstr);
                            DataRow drCode = dsItemsInvoice.Tables[1].Rows[0];
                            if (drCode["ACKCODE"].ToString() == "0")
                            {
                                success = true;
                                UpdateInvoiceF(inovoicedata);
                            }
                            //UpdateInvoice(inovoicedata);
                        }
                    }*/
                    #endregion
                    SqlConnection cn = new SqlConnection(strConnString);
                    cn.Open();
                    var esmtp = smtp.getSMTPText();
                    var getA = cm.get_Cust(inovoicedata.Cust_Sno);
                    var gCompany = c.EditCompany(inovoicedata.CompanySno);
                    string to = string.Empty;
                    string from = string.Empty;
                    SmtpClient client = new SmtpClient();
                    int port = 0;
                    MailMessage message = new MailMessage();
                    string subject = string.Empty;
                    string body = string.Empty;
                    //DateTime dt = getDet.Due_Date;
                    string txtM = string.Empty;
                    try
                    {
                        //txtM = "Ankara" + Environment.NewLine + "Mpendwa Mzazi/Mlezi wa " + sDet.Student_Full_Name + Environment.NewLine + "tafadhali lipa TZS " + String.Format("{0:n0}", fee) + " kwa ajili ya  " + getDet.Fee_Type + " kabla ya (";
                        //txtM = txtM + dt.ToString("dd/MM/yyyy") + ")." + Environment.NewLine + "Tumia Namba ya Muamala: " + getDet.Fee_Data_Sno + " Lipia kwa kupiga *150*03#au SimBanking App, Fahari Huduma, Tawi la CRDB au M-pesa." + Environment.NewLine + "Ahsante, " + fName.Facility_Name;
                        //txtM = "Mzazi wa " + getA.Cust_Name + " " + sDet.Student_Last_Name + " Lipa " + getDet.Fee_Type + " TZS " + String.Format("{0:n0}", fee) + " kabla ";
                        txtM = "Mzazi wa " + getA.Cust_Name + " TZS " + String.Format("{0:n0}", inovoicedata.Item_Total_Amount) + " kabla ";
                        txtM = txtM + inovoicedata.Posteddate.ToString("dd/MM/yyyy") + " Tumia: " + inovoicedata.Control_No + " kupitia Simbanking,CRDB Wakala,Tawini,Mitandao ya Simu." + gCompany.CompName;
                        /*if (smtid != null)
                        {
                            txtM = smtid.E_Text.Replace("{+cName+}", sDet.Student_Full_Name).Replace("{+ftype+}", getDet.Fee_Type).Replace("{+currency+}", currency).Replace("{+fee+}", String.Format("{0:n0}", fee)).Replace("{+term+}", getDet.Term_Type).Replace("{+date+}", dt.ToString("dd/MM/yyyy")).Replace("{+contno+}", getDet.Fee_Data_Sno).Replace("{+fname+}", fName.Facility_Name);
                        }*/

                        DataSet ds2 = new DataSet();
                        SqlDataAdapter da2 = new SqlDataAdapter(new SqlCommand("select * from tbMessages_sms", cn));
                        SqlCommandBuilder cb2 = new SqlCommandBuilder(da2);
                        da2.FillSchema(ds2, SchemaType.Source);
                        DataTable dt2 = ds2.Tables["Table"];
                        dt2.TableName = "tbMessages_sms";
                        DataRow rs2 = ds2.Tables["tbMessages_sms"].NewRow();

                        rs2["msg_date"] = DateTime.Now;
                        rs2["PhoneNumber"] = "255" + getA.Phone;
                        rs2["TransactionNo"] = inovoicedata.Control_No;
                        /*if (AccNo != null)
                        {
                            rs2["AccountNumber"] = AccNo.Fee_Acc_No;
                        }
                        else
                        {*/
                        rs2["AccountNumber"] = "0";
                        //}
                        rs2["Message"] = txtM;
                        rs2["trials"] = 0;
                        rs2["deliveryCode"] = DBNull.Value;
                        rs2["sent"] = 0;
                        rs2["delivered"] = 0;
                        rs2["txn_type"] = "SCHOOL";
                        rs2["Msg_Date_Time"] = DateTime.Now;
                        ds2.Tables["tbMessages_sms"].Rows.Add(rs2);
                        da2.Update(ds2, "tbMessages_sms");
                    }
                    catch(Exception ch)
                    {

                    }
                    if (!string.IsNullOrEmpty(getA.Email))
                    {


                        subject = "Student Fee Details";
                        body = "Mpendwa Mzazi/Mlezi wa " + getA.Cust_Name + ",";
                        body += "<br /><br />Tafadhali lipia  kiasi ifuatacho kwa ajili ya: " + getA.Cust_Name + "<br /><br />";// Namba ya kujiunga: " + getDet.Admission_No + "<br /><br />";
                        //body += "Mwaka wa masomo: " + getDet.Acad_Year + "<br /><br />Aina ya Ada: " + getDet.Fee_Type;
                        body += "<br /><br />Kiasi: TZS " + String.Format("{0:n0}", inovoicedata.Item_Total_Amount) + "<br /><br />Tafadhali lipia kabla ya " + inovoicedata.Posteddate.ToString("dd/MM/yyyy") + ".";
                        body += "<br /><br />Katika malipo tumia namba ya muamala: " + inovoicedata.Control_No;
                        body += "<br /><br />Lipia kwakupiga *150*03#au SimBanking App, Tawi lolote la CRDB, Fahari Huduma Wakala au mitandao ya simu.";
                        body += "<br /><br /><b>Ahsante,</b><br /> " + gCompany.CompName + ".";
                        /*if (emtid != null)
                        {
                            subject = emtid.Subject;
                            body = emtid.E_Text.Replace("{+cName+}", sDet.Student_Full_Name).Replace("{+adno+}", getDet.Admission_No).Replace("{+ayear+}", getDet.Fee_Type).Replace("{+ftype+}", getDet.Fee_Type).Replace("{+currency+}", currency).Replace("{+fee+}", String.Format("{0:n0}", fee)).Replace("{+term+}", getDet.Term_Type).Replace("{+date+}", dDate.ToString("dd/MM/yyyy")).Replace("{+contno+}", getDet.Fee_Data_Sno).Replace("{+fname+}", fName.Facility_Name);
                        }*/
                        to = getA.Email;
                        if (esmtp != null)
                        {
                            if (string.IsNullOrEmpty(esmtp.SMTP_UName))
                            {
                                port = Int32.Parse(esmtp.SMTP_Port);
                                from = esmtp.From_Address;
                                message = new MailMessage(from, to, subject, body);
                                client = new SmtpClient(esmtp.SMTP_Address, port);
                            }
                            else
                            {
                                port = Int32.Parse(esmtp.SMTP_Port);
                                from = esmtp.From_Address;
                                message = new MailMessage(from, to, subject, body);
                                client = new SmtpClient(esmtp.SMTP_Address, port);
                                client.UseDefaultCredentials = false;
                                client.EnableSsl = Convert.ToBoolean(esmtp.SSL_Enable);
                                client.Credentials = new NetworkCredential(esmtp.SMTP_UName, Utilites.DecodeFrom64(esmtp.SMTP_Password));
                                //client.Send(message);
                                //message.IsBodyHtml = true;
                            }
                        }
                        else
                        {
                        }
                        message.IsBodyHtml = true;
                        try
                        {
                            client.Send(message);
                        }
                        catch
                        {

                        }
                    }
                    Response.Redirect("/Invoice/Invoice");
                }
                catch (Exception ex)
                {
                        ex.ToString();
                }

                #endregion
                #region clscomment

                DataTable dtre = new DataTable();
                //if (dsItemsInvoice.Tables.Count > 0) { 
                //DataRow rowsign = dsItemsInvoice.Tables[0].Rows[0];
                //DataRow rowsign2 = dsItemsInvoice.Tables[1].Rows[0];
                // }


                /*if (ack == "7")
                {
                var getD1 = inv.GetINVOICEpdf(invoicenumber);
                    var getC = inv.EditINVOICEMas(invoicenumber);
                    var getCUS = cm.EditCust(getC.Chus_Mas_No);
                    string ctime = getD1.Posteddate.ToString("HH:mm:ss");
                ctime = ctime.Replace(":", "");
                //genrate Qr code with url 
                #region QRCODE 
                var image64 = "";

                    //string link = gAPI.VerifyIP_Test + rowsign2["RCTNUM"].ToString() + "_" + rowsign2["TIME"].ToString().Replace(":", "").ToString(); //recipt sucess time and RCtv
                    string link = gAPI.VerifyIP_Test + objtra.receiptcode.ToString() + graC + "_" + ctime; //recipt sucess time and RCtv

                    using (MemoryStream ms = new MemoryStream())
                    {
                        QRCodeGenerator qrGenerator = new QRCodeGenerator();
                        QRCodeGenerator.QRCode qrCode = qrGenerator.CreateQrCode(link, QRCodeGenerator.ECCLevel.Q);
                        using (Bitmap bitMap = qrCode.GetGraphic(20))
                        {
                            bitMap.Save(ms, ImageFormat.Jpeg);
                            image64 = Convert.ToBase64String(ms.ToArray());
                            ViewBag.QRCodeImage = "data:image/png;base64," + Convert.ToBase64String(ms.ToArray());
                        }
                    }
                    #endregion

                    #region PDF Genration
                    iTextSharp.text.Font fontTinyItalic = FontFactory.GetFont("Arial", 9, iTextSharp.text.Font.NORMAL, BaseColor.BLACK);
                    iTextSharp.text.Font Header = FontFactory.GetFont("Arial", 9, iTextSharp.text.Font.BOLD, BaseColor.BLACK);

                    Document pdfDoc = new Document(PageSize.A4, 25, 25, 15, 15);
                    //PdfWriter pdfWriter = PdfWriter.GetInstance(pdfDoc, Response.OutputStream);

                    string pdfFile = path + inovoicedata.Inv_Mas_Sno + ".pdf";
                    PdfWriter pdfWriter = PdfWriter.GetInstance(pdfDoc, new FileStream(pdfFile, FileMode.Create));
                    pdfWriter = PdfWriter.GetInstance(pdfDoc, Response.OutputStream);
                    pdfDoc.Open();

                    //string pdfFile = f_Path + "/Receipts/" + vp.Permit_Application_No + ".pdf";
                    //PdfWriter writer = PdfWriter.GetInstance(myDoc, new FileStream(pdfFile, FileMode.Create));

                    //Top Heading
                    Chunk chunk = new Chunk("Complete It Solutions", FontFactory.GetFont("Arial", 14, iTextSharp.text.Font.BOLDITALIC, BaseColor.BLACK));
                    pdfDoc.Add(chunk);

                    //Horizontal Line
                    //Paragraph line = new Paragraph(new Chunk(new iTextSharp.text.pdf.draw.LineSeparator(0.0F, 100.0F, BaseColor.BLACK, Element.ALIGN_LEFT, 1)));
                    //pdfDoc.Add(line);

                    //Table
                    PdfPTable table = new PdfPTable(3);
                    table.WidthPercentage = 100;
                    //0=Left, 1=Centre, 2=Right
                    table.HorizontalAlignment = 1;
                    table.SpacingBefore = 5f;
                    table.SpacingAfter = 1f;

                    int[] firstTablecellwidth = { 50, 25, 25 };
                    table.SetWidths(firstTablecellwidth);

                    //Cell no 1
                    PdfPCell cell = new PdfPCell();
                    //cell.Border = 0;
                    //Image image = Image.GetInstance(Server.MapPath("/Content/Upload/newbizlogo-120x59.jpg"));
                    //image.ScaleAbsolute(50, 50);
                    //cell.AddElement(image);
                    //table.AddCell(cell);

                    //Cell no 2 "Mobile: " + inovoicedata.CompMobNo +
                    chunk = new Chunk("\n " + inovoicedata.CompName + "\n P.O.Box:" + inovoicedata.CompPostBox + "\n " + inovoicedata.CompAddress + "\n" + " TEL : " + inovoicedata.CompTelNo + " " + "FAX :" + inovoicedata.CompFaxNo + "\n MOB : " + inovoicedata.CompMobNo + "\n" + "EMAIL:" + inovoicedata.CompEmail + " \n VATNO:" + inovoicedata.CompVatNo + " TIN NO:" + inovoicedata.TinNo + "", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK));
                    cell = new PdfPCell();
                    cell.Border = 0;
                    cell.AddElement(chunk);
                    table.AddCell(cell);

                    DateTime invdate = DateTime.Parse(inovoicedata.Invoice_Date.ToString());
                    string invnewdate = invdate.ToString("dd-MMM-yyyy");

                    chunk = new Chunk(invnewdate + "\n \n \n  \n  \n   Invoice No: " + inovoicedata.Invoice_No + " ", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK));

                    cell = new PdfPCell();
                    cell.Border = 0;
                    cell.AddElement(chunk);
                    table.AddCell(cell);

                    cell = new PdfPCell();
                    cell.Border = 0;
                    Image images = Image.GetInstance(Server.MapPath("/images/bizlogiclogo.png"));
                    images.ScaleAbsolute(120, 150);
                    cell.AddElement(images);
                    table.AddCell(cell);
                    //Add table to document
                    pdfDoc.Add(table);

                    //Horizontal Line
                    Paragraph line = new Paragraph(new Chunk(new iTextSharp.text.pdf.draw.LineSeparator(0.0F, 100.0F, BaseColor.WHITE, Element.ALIGN_LEFT, 1)));
                    pdfDoc.Add(line);

                    Paragraph para1 = new Paragraph();
                    para1.Add("Tax Invoice");
                    para1.Alignment = Element.ALIGN_CENTER;
                    para1.Font = Header;
                    pdfDoc.Add(para1);

                    //Table2
                    table = new PdfPTable(6);
                    table.WidthPercentage = 100;
                    table.HorizontalAlignment = 2;
                    table.SpacingBefore = 1f;
                    table.SpacingAfter = 5f;
                    //int[] firstTablecellwidths = { 10,10,30, 25, 25, };
                    //table.SetWidths(firstTablecellwidths);


                    //Cell
                    cell = new PdfPCell();
                    chunk = new Chunk("TO", fontTinyItalic);
                    cell.AddElement(chunk);
                    cell.HorizontalAlignment = 40;
                    cell.PaddingLeft = 250f;
                    cell.Colspan = 6;
                    table.AddCell(cell);


                    cell = new PdfPCell();
                    chunk = new Chunk("Customer Name:" + inovoicedata.Cust_Name + "", fontTinyItalic);
                    cell.AddElement(chunk);
                    cell.Colspan = 3;
                    table.AddCell(cell);


                    cell = new PdfPCell();
                    chunk = new Chunk("Pobox/Address: " + inovoicedata.CustomerPostboxNo + " " + inovoicedata.CustAddress + "", fontTinyItalic);
                    cell.AddElement(chunk);
                    cell.Colspan = 3;
                    table.AddCell(cell);


                    cell = new PdfPCell();
                    chunk = new Chunk("Contact Person: " + inovoicedata.ConPerson + "", fontTinyItalic);
                    cell.AddElement(chunk);
                    cell.Colspan = 3;
                    table.AddCell(cell);

                    cell = new PdfPCell();
                    chunk = new Chunk("Tele/FAX/Mobile: " + inovoicedata.CustPhone + "", fontTinyItalic);//" + inovoicedata.CompMobNo + "
                    cell.AddElement(chunk);
                    cell.Colspan = 3;
                    table.AddCell(cell);
                    if(CustID == "NIL")
                    {
                        CustNo = string.Empty;
                    }
                    cell = new PdfPCell();
                    chunk = new Chunk("Customer "+CustID+": " + CustNo + "", fontTinyItalic);
                    cell.AddElement(chunk);
                    cell.Colspan = 3;
                    table.AddCell(cell);

                    cell = new PdfPCell();
                    chunk = new Chunk("VRN No: " + getCUS.VatNo + "", fontTinyItalic);//" + inovoicedata.CompMobNo + "
                    cell.AddElement(chunk);
                    cell.Colspan = 3;
                    table.AddCell(cell);

                    //blak color
                    cell = new PdfPCell();
                    chunk = new Chunk("test", fontTinyItalic);
                    cell.AddElement(chunk);

                    cell.HorizontalAlignment = 30;
                    cell.Colspan = 6;
                    cell.BackgroundColor = BaseColor.BLACK;
                    table.AddCell(cell);
                    iTextSharp.text.Font heading = FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK);

                    table.AddCell(new PdfPCell(new Paragraph("QUANTITY", fontTinyItalic)));
                    table.AddCell(new PdfPCell(new Paragraph("ITEM/DESCRIPTION", fontTinyItalic)));
                    table.AddCell(new PdfPCell(new Paragraph("UNIT PRICE \n" + inovoicedata.Currency_Code + "", fontTinyItalic)) { HorizontalAlignment = Element.ALIGN_RIGHT });
                    table.AddCell(new PdfPCell(new Paragraph("VAT % ", fontTinyItalic)) { HorizontalAlignment = Element.ALIGN_RIGHT });
                    table.AddCell(new PdfPCell(new Paragraph("Total Amount \n " + inovoicedata.Currency_Code + "", fontTinyItalic)) { HorizontalAlignment = Element.ALIGN_RIGHT });
                    table.AddCell(new PdfPCell(new Paragraph("REMARKS", fontTinyItalic)));
                    foreach (var item in inovoicedata.InvoiceItemlist)
                    {
                        table.AddCell(new PdfPCell(new Paragraph(item.Item_Qty.ToString(), fontTinyItalic)));
                        table.AddCell(new PdfPCell(new Paragraph(item.Item_Description.ToString(), fontTinyItalic)));
                        table.AddCell(new PdfPCell(new Paragraph(String.Format(new CultureInfo("en-US"), "{0:C0}", item.Item_Unit_Price).Replace("$", ""), fontTinyItalic)) { HorizontalAlignment = Element.ALIGN_RIGHT });
                        table.AddCell(new PdfPCell(new Paragraph(String.Format(new CultureInfo("en-US"), "{0:C0}", item.Vat_Percentage).Replace("$", ""), fontTinyItalic)) { HorizontalAlignment = Element.ALIGN_RIGHT });
                        table.AddCell(new PdfPCell(new Paragraph(String.Format(new CultureInfo("en-US"), "{0:C0}", item.Item_Qty * item.Item_Unit_Price).Replace("$", ""), fontTinyItalic)) { HorizontalAlignment = Element.ALIGN_RIGHT });
                        table.AddCell(new PdfPCell(new Paragraph(item.Remarks == null ? "" : item.Remarks.ToString(), fontTinyItalic)));
                    }

                    table.AddCell(" ");
                    table.AddCell("");
                    table.AddCell(" ");
                    table.AddCell("");
                    table.AddCell("");
                    table.AddCell("");


                    cell = new PdfPCell();
                    chunk = new Chunk("Without VAT Amount", fontTinyItalic);
                    cell.HorizontalAlignment = Element.ALIGN_RIGHT;
                    cell.PaddingLeft = 260;
                    cell.AddElement(chunk);
                    cell.Colspan = 4;

                    table.AddCell(cell);
                    cell = new PdfPCell();
                    chunk = new Chunk(String.Format(new CultureInfo("en-US"), "{0:C0}", inovoicedata.Total_Without_Vt).Replace("$", ""), fontTinyItalic);
                    cell.PaddingLeft = 65;
                    cell.AddElement(chunk);
                    cell.Colspan = 2;
                    table.AddCell(cell);

                    cell = new PdfPCell();
                    //chunk = new Chunk("VAT  " + inovoicedata.Vat_Percentage.ToString() + "" + '%' + "", fontTinyItalic);
                    chunk = new Chunk("VAT  Amount" + "", fontTinyItalic);
                    cell.PaddingLeft = 270;
                    cell.AddElement(chunk);
                    cell.Colspan = 4;
                    table.AddCell(cell);

                    cell = new PdfPCell();
                    chunk = new Chunk(String.Format(new CultureInfo("en-US"), "{0:C0}", inovoicedata.Vat_Amount).Replace("$", ""), fontTinyItalic);
                    cell.PaddingLeft = 65;
                    cell.AddElement(chunk);
                    cell.Colspan = 2;
                    table.AddCell(cell);

                    cell = new PdfPCell();
                    chunk = new Chunk("Total Amount", fontTinyItalic);
                    cell.PaddingLeft = 260;
                    cell.AddElement(chunk);
                    cell.HorizontalAlignment = Element.ALIGN_RIGHT;
                    cell.Colspan = 4;
                    table.AddCell(cell);

                    cell = new PdfPCell();
                    chunk = new Chunk(String.Format(new CultureInfo("en-US"), "{0:C0}", inovoicedata.Item_Total_Amount).Replace("$", ""), fontTinyItalic);
                    cell.PaddingLeft = 65;
                    cell.AddElement(chunk);
                    cell.Colspan = 2;
                    table.AddCell(cell);

                    var dd = "Only";
                    cell = new PdfPCell();
                    chunk = new Chunk("Amount In words " + inovoicedata.Currency_Code + ": " + inovoicedata.AmountWords.ToString() + "" + dd.ToString() + "", fontTinyItalic);
                    cell.AddElement(chunk);

                    cell.HorizontalAlignment = 40;
                    cell.Colspan = 6;
                    table.AddCell(cell);

                    cell = new PdfPCell();
                    chunk = new Chunk("PAYMENT TERMS", fontTinyItalic);
                    cell.HorizontalAlignment = 60;
                    //cell.PaddingLeft = 100;
                    cell.AddElement(chunk);
                    cell.Colspan = 1;
                    table.AddCell(cell);

                    cell = new PdfPCell();
                    chunk = new Chunk("" + inovoicedata.BankName.ToString() + ", Account No:" + inovoicedata.AccountNo.ToString() + ", " + inovoicedata.CompName.ToString() + "", fontTinyItalic);
                    cell.AddElement(chunk);
                    cell.Colspan = 5;
                    table.AddCell(cell);




                    cell = new PdfPCell();
                    chunk = new Chunk("WARRENTY", fontTinyItalic);
                    cell.HorizontalAlignment = 40;
                    cell.AddElement(chunk);
                    cell.Colspan = 1;
                    table.AddCell(cell);

                    cell = new PdfPCell();
                    chunk = new Chunk(inovoicedata.warrenty == null ? string.Empty : inovoicedata.warrenty.ToString(), fontTinyItalic);
                    cell.AddElement(chunk);
                    cell.Colspan = 5;
                    table.AddCell(cell);


                    cell = new PdfPCell();
                    chunk = new Chunk("Goods Status", fontTinyItalic);
                    cell.HorizontalAlignment = 40;
                    cell.AddElement(chunk);
                    cell.Colspan = 1;
                    table.AddCell(cell);

                    cell = new PdfPCell();
                    chunk = new Chunk(inovoicedata.goods_status == null ? string.Empty : inovoicedata.goods_status.ToString(), fontTinyItalic);
                    cell.AddElement(chunk);
                    cell.Colspan = 5;
                    table.AddCell(cell);

                    cell = new PdfPCell();
                    chunk = new Chunk("Delivery Status", fontTinyItalic);
                    cell.HorizontalAlignment = 40;
                    cell.AddElement(chunk);
                    cell.Colspan = 1;
                    table.AddCell(cell);

                    cell = new PdfPCell();
                    chunk = new Chunk(inovoicedata.delivery_status == null ? string.Empty : inovoicedata.delivery_status.ToString(), fontTinyItalic);
                    cell.AddElement(chunk);
                    cell.Colspan = 5;
                    table.AddCell(cell);

                    cell = new PdfPCell();
                    chunk = new Chunk("other remarks ", fontTinyItalic);
                    cell.HorizontalAlignment = 40;
                    cell.AddElement(chunk);
                    cell.Colspan = 1;
                    cell.Rowspan = 2;

                    table.AddCell(cell);

                    cell = new PdfPCell();
                    chunk = new Chunk(inovoicedata.Remarks == null ? string.Empty : inovoicedata.Remarks.ToString(), fontTinyItalic);
                    cell.AddElement(chunk);
                    cell.Colspan = 5;
                    table.AddCell(cell);

                    cell = new PdfPCell();
                    chunk = new Chunk("");
                    cell.AddElement(chunk);
                    cell.Colspan = 5;
                    table.AddCell(cell);

                    pdfDoc.Add(table);


                    //Table
                    table = new PdfPTable(2);
                    table.WidthPercentage = 100;
                    table.HorizontalAlignment = 2;
                    table.SpacingBefore = 10f;
                    table.SpacingAfter = 10f;

                    table.AddCell(new PdfPCell(new Paragraph("PAPERS PROCESSED BY", fontTinyItalic)));
                    table.AddCell(new PdfPCell(new Paragraph("ORDER ACCEPTENCE BY CUSTOMER", fontTinyItalic)));

                    table.AddCell(new PdfPCell(new Paragraph(" Name : " + inovoicedata.CompContactPerson.ToString() + "\n Desigination: Director,\n\n\n SIGNATURE", fontTinyItalic)));
                    table.AddCell(new PdfPCell(new Paragraph("Name :  \n\n Signature& Date: ,\n companyStamp & Seal", fontTinyItalic)));

                    table.AddCell(new PdfPCell(new Paragraph("Bizlogic", fontTinyItalic)));
                    table.AddCell(new PdfPCell(new Paragraph("complete 'IT' Solutions", fontTinyItalic)));

                    //table.AddCell("Papers Processed BY :   Order acceptance by the customer ");

                    pdfDoc.Add(table);

                    //cell = new PdfPCell();
                    ////cell.Border = 0;
                    //Image imagenew = Image.GetInstance(Server.MapPath("/images/bizlogiclogo.png"));
                    //imagenew.ScaleAbsolute(50, 50);
                    //cell.AddElement(imagenew);
                    //table.AddCell(cell);

                    table = new PdfPTable(2);
                    table.WidthPercentage = 100;
                    table.HorizontalAlignment = 2;
                    table.SpacingBefore = 3f;
                    table.SpacingAfter = 3f;
                    cell = new PdfPCell();

                    byte[] bytes = Convert.FromBase64String(Regex.Replace(image64, @"^data:image\/[a-zA-Z]+;base64,", string.Empty));
                    iTextSharp.text.Image image1 = iTextSharp.text.Image.GetInstance(bytes);
                    image1.ScaleAbsolute(50, 50);
                    cell.AddElement(image1);

                    cell.HorizontalAlignment = PdfPCell.ALIGN_CENTER;

                    table.AddCell(cell);

                    table.AddCell(new PdfPCell(new Paragraph("Invoice Verification Code:\n" + objtra.receiptcode.ToString() + graC + "", fontTinyItalic)));
                    //cell = new PdfPCell();
                    //chunk = new Chunk("Invoice Verification Code ,/n 84c3_65_3443_456");
                    //cell.AddElement(chunk);

                    //cell.HorizontalAlignment = 40;
                    //cell.Colspan = 2;
                    //table.AddCell(cell);

                    pdfDoc.Add(table);



                    pdfWriter.CloseStream = false;
                    pdfDoc.Close();
                    Response.Buffer = true;

                    Response.Redirect("/Invoice/Invoice?rst=" + ackm + "&rst1=" + ack);
                    #endregion
                }

                else
                {
                    //Response.Redirect("/InvoiceDownload/InvoiceDownload?Id=" + Id + "&rst=" + ackm);
                    Response.Redirect("/Invoice/Invoice?rst=" + ackm+"&rst1="+ack);
                }*/

                //}
                #endregion

            }
            catch (Exception ex)
            {
                ex.ToString();
                //Response.Redirect("/InvoiceDownload/InvoiceDownload?Id="+ Id+ "&&rst="+-1);
            }

        }
        #endregion

        #region For TOken
        public async Task<string> GetToken(string username, string pwd)
        {
            var gAPI = areg.getAPI();
            string Rand = "12345678";
            Random random = new Random();
            string combination = "1234567890";
            StringBuilder captcha = new StringBuilder();
            for (int i = 0; i < 6; i++)
                captcha.Append(combination[random.Next(combination.Length)]);
            Rand = captcha.ToString();
            string fileLoc1 = @f_Path + "/XML_Token/" + Rand + "_req.txt";
            string fileLoc2 = @f_Path + "/XML_Token/" + Rand + "_res.txt";
            string resultJsons = string.Empty;
            var client = new HttpClient();
            var dict = new Dictionary<string, string>();
            dict.Add("Username", username);
            dict.Add("Password", pwd);
            dict.Add("grant_type", "password");

            string JSON_CONTENT = JsonConvert.SerializeObject(dict);
            FileStream fs1 = null;
            if (!System.IO.File.Exists(fileLoc1))
            {
                using (fs1 = System.IO.File.Create(fileLoc1))
                {
                    //File.WriteAllText(fileLoc, rdata);
                }
                System.IO.File.WriteAllText(fileLoc1, JSON_CONTENT);
                fs1.Close();
            }
            var encodedContent = new FormUrlEncodedContent(dict);
            var responsess = await client.PostAsync(gAPI.TokenIP_Test, encodedContent).ConfigureAwait(false);
            StreamReader sr = new StreamReader(await responsess.Content.ReadAsStreamAsync(), System.Text.Encoding.Default);
            ack = responsess.Headers.GetValues("ACKCODE").FirstOrDefault();
            ackm = responsess.Headers.GetValues("ACKMSG").FirstOrDefault();
            ViewBag.MSg = ackm;
            string backstr = sr.ReadToEnd();
            string backstr1 = sr.ReadToEnd();
            backstr = backstr + Environment.NewLine + ack + Environment.NewLine + ackm;
            sr.Close();
            FileStream fs2 = null;
            if (!System.IO.File.Exists(fileLoc2))
            {
                using (fs2 = System.IO.File.Create(fileLoc2))
                {
                    //File.WriteAllText(fileLoc, rdata);
                }
                System.IO.File.WriteAllText(fileLoc2, backstr);
                fs2.Close();
            }
            if (responsess.StatusCode == HttpStatusCode.OK)
            {
                resultJsons = responsess.Content.ReadAsStringAsync().Result;
                var responseContent = await responsess.Content.ReadAsStringAsync().ConfigureAwait(false);
                JObject jObject = JObject.Parse(backstr1);
                tok.Access_Token = jObject["access_token"].ToString();
                tok.Token_Type = jObject["token_type"].ToString();
                tok.Expire_In = jObject["expires_in"].ToString();
                tok.Routing_Key = username;
                tok.AddToken(tok);
            }

            return resultJsons;


        }
        #endregion

        #region  dt xml
        public DataSet DtXml(string xmlData)
        {
            StringReader theReader = new StringReader(xmlData);
            DataSet theDataSet = new DataSet();
            theDataSet.ReadXml(theReader);

            return theDataSet;
        }

        #endregion

        #region Sign

        public byte[] Sign(string text, string certSubject)
        {

            string f_Path = System.Web.Configuration.WebConfigurationManager.AppSettings["FilePath"].ToString();
            X509Store my = new X509Store(StoreName.My, StoreLocation.CurrentUser);
            X509Certificate2 certificate2 = new X509Certificate2(f_Path, "Kimara20");
            //X509Certificate2 certificate2 = new X509Certificate2(f_Path, "bizl0g*");
            my.Open(OpenFlags.ReadWrite);
            my.Add(certificate2);

            // Find the certificate we'll use to sign

            RSACryptoServiceProvider csp = null;

            foreach (X509Certificate2 cert in my.Certificates)
            {

                if (cert.Subject.Contains(certSubject))
                {


                    csp = (RSACryptoServiceProvider)cert.PrivateKey;

                }

            }

            if (csp == null)
            {

                throw new Exception("No valid cert was found");

            }



            SHA1Managed sha1 = new SHA1Managed();

            UnicodeEncoding encoding = new UnicodeEncoding();

            byte[] data = System.Text.Encoding.ASCII.GetBytes(text);

            byte[] hash = sha1.ComputeHash(data);



            return csp.SignHash(hash, CryptoConfig.MapNameToOID("SHA1"));

        }

        #endregion


        #region Number to Word
        public string NumberToWord(int num)
        {
            if (num == 0)
                return "Zero";

            if (num < 0)
                return "Not supported";

            var words = "";
            string[] strones = { "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen" };
            string[] strtens = { "Twenty", "Thirty", "Fourty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety" };


            int crore = 0, lakhs = 0, thousands = 0, hundreds = 0, tens = 0, single = 0;


            crore = num / 10000000; num = num - crore * 10000000;
            lakhs = num / 100000; num = num - lakhs * 100000;
            thousands = num / 1000; num = num - thousands * 1000;
            hundreds = num / 100; num = num - hundreds * 100;
            if (num > 19)
            {
                tens = num / 10; num = num - tens * 10;
            }
            single = num;


            if (crore > 0)
            {
                if (crore > 19)
                    words += NumberToWord(crore) + "Crore ";
                else
                    words += strones[crore - 1] + " Crore ";
            }

            if (lakhs > 0)
            {
                if (lakhs > 19)
                    words += NumberToWord(lakhs) + "Lakh ";
                else
                    words += strones[lakhs - 1] + " Lakh ";
            }

            if (thousands > 0)
            {
                if (thousands > 19)
                    words += NumberToWord(thousands) + "Thousand ";
                else
                    words += strones[thousands - 1] + " Thousand ";
            }

            if (hundreds > 0)
                words += strones[hundreds - 1] + " Hundred ";

            if (tens > 0)
                words += strtens[tens - 2] + " ";

            if (single > 0)
                words += strones[single - 1] + " ";

            return words;
        }
        #endregion

        # region Tranlater
        private String changeToWords(String numb, bool isCurrency)
        {
            String val = "", wholeNo = numb, points = "", andStr = "", pointStr = "";
            String endStr = (isCurrency) ? ("Only") : ("");
            try
            {
                int decimalPlace = numb.IndexOf(".");
                if (decimalPlace > 0)
                {
                    wholeNo = numb.Substring(0, decimalPlace);
                    points = numb.Substring(decimalPlace + 1);
                    if (Convert.ToInt32(points) > 0)
                    {
                        andStr = (isCurrency) ? ("and") : ("point");// just to separate whole numbers from points/cents
                        endStr = (isCurrency) ? ("Cents " + endStr) : ("");
                        pointStr = translateCents(points);
                    }
                }
                val = String.Format("{0} {1}{2} {3}", translateWholeNumber(wholeNo).Trim(), andStr, pointStr, endStr);
            }
            catch {; }
            return val;
        }
        private String translateWholeNumber(String number)
        {
            string word = "";
            try
            {
                bool beginsZero = false;//tests for 0XX
                bool isDone = false;//test if already translated
                double dblAmt = (Convert.ToDouble(number));
                //if ((dblAmt > 0) && number.StartsWith("0"))
                if (dblAmt > 0)
                {//test for zero or digit zero in a nuemric
                    beginsZero = number.StartsWith("0");
                    int numDigits = number.Length;
                    int pos = 0;//store digit grouping
                    String place = "";//digit grouping name:hundres,thousand,etc...
                    switch (numDigits)
                    {
                        case 1://ones' range
                            word = ones(number);
                            isDone = true;
                            break;
                        case 2://tens' range
                            word = tens(number);
                            isDone = true;
                            break;
                        case 3://hundreds' range
                            pos = (numDigits % 3) + 1;
                            place = " Hundred ";
                            break;
                        case 4://thousands' range
                        case 5:
                        case 6:
                            pos = (numDigits % 4) + 1;
                            place = " Thousand ";
                            break;
                        case 7://millions' range
                        case 8:
                        case 9:
                            pos = (numDigits % 7) + 1;
                            place = " Million ";
                            break;
                        case 10://Billions's range
                            pos = (numDigits % 10) + 1;
                            place = " Billion ";
                            break;
                        //add extra case options for anything above Billion...
                        default:
                            isDone = true;
                            break;
                    }
                    if (!isDone)
                    {//if transalation is not done, continue...(Recursion comes in now!!)
                        word = translateWholeNumber(number.Substring(0, pos)) + place + translateWholeNumber(number.Substring(pos));
                        //check for trailing zeros
                        if (beginsZero) word = " and " + word.Trim();
                    }
                    //ignore digit grouping names
                    if (word.Trim().Equals(place.Trim())) word = "";
                }
            }
            catch {; }
            return word.Trim();
        }
        private String tens(String digit)
        {
            int digt = Convert.ToInt32(digit);
            String name = null;
            switch (digt)
            {
                case 10:
                    name = "Ten";
                    break;
                case 11:
                    name = "Eleven";
                    break;
                case 12:
                    name = "Twelve";
                    break;
                case 13:
                    name = "Thirteen";
                    break;
                case 14:
                    name = "Fourteen";
                    break;
                case 15:
                    name = "Fifteen";
                    break;
                case 16:
                    name = "Sixteen";
                    break;
                case 17:
                    name = "Seventeen";
                    break;
                case 18:
                    name = "Eighteen";
                    break;
                case 19:
                    name = "Nineteen";
                    break;
                case 20:
                    name = "Twenty";
                    break;
                case 30:
                    name = "Thirty";
                    break;
                case 40:
                    name = "Fourty";
                    break;
                case 50:
                    name = "Fifty";
                    break;
                case 60:
                    name = "Sixty";
                    break;
                case 70:
                    name = "Seventy";
                    break;
                case 80:
                    name = "Eighty";
                    break;
                case 90:
                    name = "Ninety";
                    break;
                default:
                    if (digt > 0)
                    {
                        name = tens(digit.Substring(0, 1) + "0") + " " + ones(digit.Substring(1));
                    }
                    break;
            }
            return name;
        }
        private String ones(String digit)
        {
            int digt = Convert.ToInt32(digit);
            String name = "";
            switch (digt)
            {
                case 1:
                    name = "One";
                    break;
                case 2:
                    name = "Two";
                    break;
                case 3:
                    name = "Three";
                    break;
                case 4:
                    name = "Four";
                    break;
                case 5:
                    name = "Five";
                    break;
                case 6:
                    name = "Six";
                    break;
                case 7:
                    name = "Seven";
                    break;
                case 8:
                    name = "Eight";
                    break;
                case 9:
                    name = "Nine";
                    break;
            }
            return name;
        }
        private String translateCents(String cents)
        {
            String cts = "", digit = "", engOne = "";
            for (int i = 0; i < cents.Length; i++)
            {
                digit = cents[i].ToString();
                if (digit.Equals("0"))
                {
                    engOne = "Zero";
                }
                else
                {
                    engOne = ones(digit);
                }
                cts += " " + engOne;
            }
            return cts;
        }

        #endregion

        #region Save Reg Data

        public long AddRegData(DataSet ds, long cno)
        {
            long result1 = 0;
            long ssno = cno;
            try
            {

                TRARegistration objtra = new TRARegistration();
                DataRow row = ds.Tables[1].Rows[0];
                objtra.ack_code = Convert.ToInt32(row["ACKCODE"]);
                objtra.ack_message = row["ACKMSG"].ToString();
                objtra.regid = row["REGID"].ToString();
                objtra.serial = row["SERIAL"].ToString();
                objtra.uin = row["UIN"].ToString();
                objtra.tin_no = Convert.ToInt32(row["TIN"]);
                objtra.vrn = row["VRN"].ToString();
                objtra.mobile_no = row["MOBILE"].ToString();
                objtra.street = row["STREET"].ToString();
                objtra.city = row["STREET"].ToString();
                objtra.address = row["ADDRESS"].ToString();
                objtra.country = row["COUNTRY"].ToString();
                objtra.company_name = row["NAME"].ToString();
                objtra.receiptcode = row["RECEIPTCODE"].ToString();
                objtra.region = row["REGION"].ToString();
                objtra.gc = Convert.ToInt32(row["GC"]);
                objtra.taxoffice = row["TAXOFFICE"].ToString();
                objtra.username = row["USERNAME"].ToString();
                objtra.password = row["PASSWORD"].ToString();
                objtra.tokenpath = row["TOKENPATH"].ToString();
                objtra.posted_by = "1";
                objtra.posted_date = DateTime.Now;
                if (ssno == 0)
                {
                    ssno = tra.AddTRARegistration(objtra);//add data
                    foreach (DataRow detailsRow in ds.Tables[2].Rows)
                    {
                        TRARegistration trdetails = new TRARegistration();
                        trdetails.reg_ack_sno = ssno;
                        trdetails.tax_code = detailsRow["CODEA"].ToString();
                        trdetails.tax_percentage = Convert.ToInt32(detailsRow["CODEA"]);
                        tra.AddregistrationackDetails(trdetails);
                    }
                }
                if (ssno > 0)
                {
                    objtra.reg_ack_sno = ssno;
                    tra.UpdateRegistration(objtra);//update data
                    tra.DeleteRegDet(objtra);
                    foreach (DataRow detailsRow in ds.Tables[2].Rows)
                    {
                        TRARegistration trdetails = new TRARegistration();
                        trdetails.reg_ack_sno = ssno;
                        trdetails.tax_code = detailsRow["CODEA"].ToString();
                        trdetails.tax_percentage = Convert.ToInt32(detailsRow["CODEA"]);
                        tra.AddregistrationackDetails(trdetails);
                    }
                }
                result1 = ssno;
                return result1;
            }
            catch (Exception Ex)
            {
                Ex.ToString();
            }
            return result1;
        }

        #endregion

        #region Update Invoice
        public void UpdateInvoice(InvoicePDfData invc)
        {
            try
            {
                INVOICE obj = new INVOICE();
                obj.grand_count = (invc.grand_count == null ? 0 : invc.grand_count) + 1;
                if (inv.p_date == System.DateTime.Now.Date && invc.daily_count != null || invc.daily_count != 0)
                {
                    invc.daily_count = 0;
                }
                obj.daily_count = (invc.daily_count == null ? 0 : invc.daily_count) + 1;
                //obj.approval_status = "2";
                //obj.approval_date = System.DateTime.Now;
                obj.Inv_Mas_Sno = invc.Inv_Mas_Sno;
                inv.UpdateInvoiMasForTRA(obj);
            }
            catch (Exception Ex)
            {
                Ex.ToString();
            }
        }
        public void UpdateInvoiceF(InvoicePDfData invc)
        {

            try
            {
                INVOICE obj = new INVOICE();
                obj.approval_status = "2";
                obj.approval_date = System.DateTime.Now;
                obj.Inv_Mas_Sno = invc.Inv_Mas_Sno;

                inv.UpdateInvoice(obj);
            }
            catch (Exception Ex)
            {
                Ex.ToString();
            }

        }
        public void UpdateInvoiceD(InvoicePDfData invc)
        {

            try
            {
                INVOICE obj = new INVOICE();
                obj.Inv_Mas_Sno = invc.Inv_Mas_Sno;

                inv.UpdateInvoiceDate(obj);
            }
            catch (Exception Ex)
            {
                Ex.ToString();
            }

        }
        public string escapeXML(string s)
        {
            string toxml = s;
            if (!string.IsNullOrEmpty(toxml))
            {
                // replace literal values with entities
                toxml = toxml.Replace("'", "&apos;");
                toxml = toxml.Replace("\"", "&quot;");
                toxml = toxml.Replace(">", "&gt;");
                toxml = toxml.Replace("<", "&lt;");
                toxml = toxml.Replace("&", "&amp;");
            }
            return toxml;
        }
        #endregion
    }
}

