﻿using BL.BIZINVOICING.BusinessEntities.Masters;
using JichangeApi.Models;
using JichangeApi.Models.form;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace JichangeApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class CustomersController : ApiController
    {
        CustomerMaster cm = new CustomerMaster();
        CompanyBankMaster c = new CompanyBankMaster();
        //COUNTRY c = new COUNTRY();
        Auditlog ad = new Auditlog();
        REGION r = new REGION();
        DISTRICTS d = new DISTRICTS();
        WARD w = new WARD();
        private readonly dynamic returnNull = null;
        //AuditLogs al = new AuditLogs();
        String[] list = new String[15] { "cust_mas_sno", "customer_name", "pobox_no", "physical_address", "region_id", "district_sno", "ward_sno",
            "tin_no", "vat_no","contact_person","email_address","mobile_no", "posted_by", "posted_date", "comp_mas_sno" };

    
        [HttpPost]
        public HttpResponseMessage GetCusts(SingletonComp c)
        {
            if (ModelState.IsValid) { 
                    try
                    {

                        var result = cm.CustGet(long.Parse(c.compid.ToString()));
                        if (result != null)
                        {
                            return Request.CreateResponse(new {response = result, message ="Success"});
                        }
                        else
                        {
                            var d = 0;
                            return Request.CreateResponse(new {response = d, message ="Failed"});
                        }

                    }
                    catch (Exception Ex)
                    {
                        Ex.ToString();
                    }
            }
            else
            {
                var errorMessages = ModelState.Values.SelectMany(v => v.Errors).Select(e => e.ErrorMessage).ToList();
                return Request.CreateResponse(new { response = 0, message = errorMessages });
            }
            return returnNull;
        }

        [HttpPost]
        public HttpResponseMessage GetRegion(string rn)
        {
            try
            {
                long rid = 0;
                if (string.IsNullOrEmpty(rn))
                {

                }
                else
                {
                    rid = long.Parse(rn);
                }
                var result = r.EditREGION(rid);
                if (result != null)
                {
                    return Request.CreateResponse(new {response = result, message ="Success"});
                }
                else
                {
                    var d = 0;
                    return Request.CreateResponse(new {response = d, message ="Failed"});
                }

            }
            catch (Exception Ex)
            {
                Ex.ToString();
            }
            return returnNull;
        }
        [HttpPost]
        public HttpResponseMessage GetComp(SingletonComp d)
        {
            if (ModelState.IsValid) { 
                try
                {

                    var result = c.CompGet(long.Parse(d.compid.ToString()));
                    if (result != null)
                    {
                        return Request.CreateResponse(new {response = result, message ="Success"});
                    }
                    else
                    {
                        var t = 0;
                        return Request.CreateResponse(new {response = t, message ="Failed"});
                    }

                }
                catch (Exception Ex)
                {
                    Ex.ToString();
                }
            }
            else
            {
                var errorMessages = ModelState.Values.SelectMany(v => v.Errors).Select(e => e.ErrorMessage).ToList();
                return Request.CreateResponse(new { response = 0, message = errorMessages});
            }
            return returnNull;

        }


        [HttpPost]
        public HttpResponseMessage GetDistrict(string dn)
        {
            try
            {
                long rid = 0;
                if (string.IsNullOrEmpty(dn))
                {

                }
                else
                {
                    rid = long.Parse(dn);
                }
                var result = d.EditDISTRICTS(rid);
                if (result != null)
                {
                    return Request.CreateResponse(new {response = result, message ="Success"});
                }
                else
                {
                    var d = 0;
                    return Request.CreateResponse(new {response = d, message ="Failed"});
                }

            }
            catch (Exception Ex)
            {
                Ex.ToString();
            }
            return returnNull;
        }
        [HttpPost]
        public HttpResponseMessage GetWard(string wn)
        {
            try
            {
                long rid = 0;
                if (string.IsNullOrEmpty(wn))
                {

                }
                else
                {
                    rid = long.Parse(wn);
                }
                var result = w.EditWARD(rid);
                if (result != null)
                {
                    return Request.CreateResponse(new {response = result, message ="Success"});
                }
                else
                {
                    var d = 0;
                    return Request.CreateResponse(new {response = d, message ="Failed"});
                }

            }
            catch (Exception Ex)
            {
                Ex.ToString();
            }
            return returnNull;
        }
        [HttpGet]
        public HttpResponseMessage GetRegionDetails()
        {
            try
            {
                var result = r.GetReg();
                return Request.CreateResponse(new {response = result, message ="Success"});
            }
            catch (Exception Ex)
            {
                Ex.ToString();
            }
            return returnNull;
        }//need to check get methods
        [HttpPost]
        public HttpResponseMessage GetRegionDetails1(long Sno)
        {
            try
            {
                var result = r.GetReg(Sno);
                return Request.CreateResponse(new {response = result, message ="Success"});
            }
            catch (Exception Ex)
            {
                Ex.ToString();
            }
            return returnNull;
        }//need to check get methods


        [HttpPost]
        public HttpResponseMessage GetDistDetails(long Sno)
        {
            try
            {
                string ash = null;
                if (Sno == Convert.ToInt64(ash))
                {
                    return Request.CreateResponse(new { response = Sno, message = "Failed" });
                }
                else
                {
                    var result = d.GetDistrictActive(Sno);
                    if (result == null)
                    {
                        int d = 0;
                        return Request.CreateResponse(new {response = d, message ="Failed"});
                    }
                    else
                    {
                        return Request.CreateResponse(new {response = result, message ="Success"});
                    }
                }
            }
            catch (Exception Ex)
            {
                Ex.ToString();
            }
            return returnNull;
        }
        [HttpPost]
        public HttpResponseMessage GetWardDetails(long sno = 1)
        {
            try
            {
                var result = w.GetWARDAct(sno);
                if (result == null)
                {
                    int d = 0;
                    return Request.CreateResponse(new {response = d, message ="Failed"});
                }
                else
                {
                    return Request.CreateResponse(new {response = result, message ="Success"});
                }
            }
            catch (Exception Ex)
            {
                Ex.ToString();
            }
            return returnNull;
        }
        [HttpPost]
        public HttpResponseMessage GetTIN(long sno)
        {
            try
            {
                var result = cm.getTIN(sno);
                if (result == null)
                {
                    int d = 0;
                    return Request.CreateResponse(new {response = d, message ="Failed"});
                }
                else
                {
                    return Request.CreateResponse(new { result.TinNo, message = "Success" });
                }
            }
            catch (Exception Ex)
            {
                Ex.ToString();
            }
            return returnNull;
        }



     /*   [HttpPost]
        public HttpResponseMessage AddCustomer(CustomersForm c)
        {
            if (ModelState.IsValid) {  
                    try
                    {
                        cm.Cust_Sno = CSno;
                        cm.Cust_Name = CName;
                        cm.PostboxNo = PostboxNo;
                        cm.Address = Address;
                        cm.CompanySno = long.Parse((c.compid).ToString());
                        if (regid > 0)
                        {
                            cm.Region_SNO = regid;
                        }
                        if (distsno > 0)
                        {
                            cm.DistSno = distsno;
                        }
                        if (wardsno > 0)
                        {
                            cm.WardSno = wardsno;
                        }

                        cm.TinNo = Tinno;
                        cm.VatNo = VatNo;
                        cm.ConPerson = CoPerson;
                        cm.Email = Mail;
                        cm.Phone = Mobile_Number;
                        //sd.Status = Session["admin1"].ToString() == "Admin" ? "Approved" : "Pending";
                        //sd.Facility_reg_Sno = long.Parse(Session["Facili_Reg_No"].ToString());
                        //sd.Facility_Name = Session["Facili_Name"].ToString();
                        cm.Posted_by = Session["UserID"].ToString();
                        cm.Checker = check_status;
                        long ssno = 0;
                        if (CSno == 0)
                        {
                            var result = cm.ValidateCount(CName.ToLower(), Tinno);
                            //result = false;
                            if (result == true)
                            {
                                return Request.CreateResponse(new {response = result, message ="Success"});
                            }
                            else
                            {
                                ssno = cm.CustAdd(cm);

                                *//*if (ssno > 0)
                                {
                            
                                    String[] list1 = new String[15] { ssno.ToString(), CName, PostboxNo, Address, regid.ToString(), distsno.ToString(), wardsno.ToString(),
                                        Tinno, VatNo, CoPerson, Mail, Mobile_Number, Session["UserID"].ToString(), DateTime.Now.ToString(),(c.compid).ToString() };
                                    for (int i = 0; i < list.Count(); i++)
                                    {
                                        ad.Audit_Type = "Insert";
                                        ad.Columnsname = list[i];
                                        ad.Table_Name = "Customers";
                                        ad.Newvalues = list1[i];
                                        ad.AuditBy = Session["UserID"].ToString();
                                        ad.Comp_Sno= long.Parse(c.compid.ToString());
                                        ad.Audit_Date = DateTime.Now;
                                        ad.Audit_Time = DateTime.Now;
                                        ad.AddAudit(ad);
                                    }
                                }*//*

                                return Json(ssno, JsonRequestBehavior.AllowGet);
                            }
                        }
                        else if (CSno > 0)
                        {
                            var update = cm.ValidateDeleteorUpdate(CSno);
                            if (update == false)
                            {

                                if (dummy == false)
                                {
                                    return Json(dummy, JsonRequestBehavior.AllowGet);
                                }

                                else
                                {

                                    var dd = cm.EditCust(CSno);
                                    *//*if (dd != null)
                                    {
                                        String[] list2 = new String[15] { dd.Cust_Sno.ToString(), dd.Cust_Name, dd.PostboxNo, dd.Address, dd.Region_SNO.ToString(), dd.DistSno.ToString(), dd.WardSno.ToString(),
                                            dd.TinNo, dd.VatNo,dd.ConPerson,dd.Email,dd.Phone, Session["UserID"].ToString(),  DateTime.Now.ToString(),dd.CompanySno.ToString() };
                                        String[] list1 = new String[15] { CSno.ToString(), CName, PostboxNo, Address, regid.ToString(), distsno.ToString(), wardsno.ToString(),
                                        Tinno, VatNo, CoPerson, Mail, Mobile_Number, Session["UserID"].ToString(), DateTime.Now.ToString(),(c.compid).ToString() };

                                        for (int i = 0; i < list.Count(); i++)
                                        {
                                    
                                                ad.Audit_Type = "Update";
                                                ad.Columnsname = list[i];
                                                ad.Table_Name = "Customers";
                                                ad.Oldvalues = list2[i];
                                                ad.Newvalues = list1[i];
                                                ad.AuditBy = Session["UserID"].ToString();
                                                ad.Audit_Date = DateTime.Now;
                                                ad.Audit_Time = DateTime.Now;
                                                ad.AddAudit(ad);
                                    
                                        }
                                    }*//*
                                    cm.CustUpdate(cm);
                                    ssno = CSno;
                                    return Json(ssno, JsonRequestBehavior.AllowGet);
                                }
                            }
                            else
                            {
                                return Json(update, JsonRequestBehavior.AllowGet);
                            }
                        }



                    }
                    catch (Exception Ex)
                    {
                        Ex.ToString();
                    }

                }
                else
                {
                    var errorMessages = ModelState.Values.SelectMany(v => v.Errors).Select(e => e.ErrorMessage).ToList();
                    return Request.CreateResponse(new { response = 0, message = errorMessages });
                }
            return returnNull;
        }
*/
        [HttpPost]
        public HttpResponseMessage DeleteCust(long sno)
        {
            try
            {

                //var name = sd.ValidateDeleteorUpdate(sno, long.Parse(Session["Facili_Reg_No"].ToString()));
                //if (name == true)
                //{
                //    return Json(name, JsonRequestBehavior.AllowGet);
                //}
                //else
                //{
                if (sno > 0)
                {
                    var dd = cm.EditCust(sno);
                    /*if (dd != null)
                    {
                        //String[] list2 = new String[15] { dd.Cust_Sno.ToString(), dd.Cust_Name, dd.PostboxNo, dd.Address, dd.Region_SNO.ToString(), dd.DistSno.ToString(), dd.WardSno.ToString(),
                        //            dd.TinNo, dd.VatNo,dd.ConPerson,dd.Email,dd.Phone, dd.Posted_by, dd.Posted_Date.ToString(),dd.CompanySno.ToString() };
                        String[] list2 = new String[15] { dd.Cust_Sno.ToString(), dd.Cust_Name, dd.PostboxNo, dd.Address, dd.Region_SNO.ToString(), dd.DistSno.ToString(), dd.WardSno.ToString(),
                                    dd.TinNo, dd.VatNo,dd.ConPerson,dd.Email,dd.Phone, Session["UserID"].ToString(),  DateTime.Now.ToString(),dd.CompanySno.ToString() };
                        for (int i = 0; i < list.Count(); i++)
                        {
                            ad.Audit_Type = "Delete";
                            ad.Columnsname = list[i];
                            ad.Table_Name = "Customers";
                            ad.Oldvalues = list2[i];
                            ad.AuditBy = Session["UserID"].ToString();
                            ad.Comp_Sno = long.Parse(c.compid.ToString());
                            ad.Audit_Date = DateTime.Now;
                            ad.Audit_Time = DateTime.Now;
                            ad.AddAudit(ad);
                        }
                    }*/
                    //al.Facility_Sno = sno;
                    cm.CustDelete(sno);
                    return Request.CreateResponse(new { response = sno, message = "Success"});
                }
                //}
            }
            catch (Exception Ex)
            {
                Ex.ToString();
            }
            return returnNull;
        }


        //private void sendcode(String email, String auname)
        //{
        //    using (MailMessage message = new MailMessage())
        //    {
        //        Random random = new Random();
        //        message.To.Add(email);
        //        SmtpClient smtp = new SmtpClient();
        //        smtp.Host = "smtp.gmail.com";
        //        smtp.Port = 587;
        //        smtp.Credentials = new System.Net.NetworkCredential("institutionreg@gmail.com", "instreg@1");
        //        smtp.EnableSsl = true;
        //        message.Subject = "Activation code to verify email Address";
        //        message.Body = "Hello! " + auname.ToString() + ",your Activation code is " + auname + "\n\n\n Thanks & Regards";
        //        Session["sendcode"] = auname;
        //        string toaddress = email.ToString();
        //        string fromaddress = "institutionreg@gmail.com";
        //        message.From = new MailAddress(fromaddress);
        //        smtp.Send(message);
        //    }
        //}


    }
}
