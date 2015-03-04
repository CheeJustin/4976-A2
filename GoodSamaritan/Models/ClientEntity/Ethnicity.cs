﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace GoodSamaritan.Models.ClientEntity
{
    public class Ethnicity
    {
        [Key]
        public string Ethnicity { get; set; }

        public List<ClientModel> Client { get; set; }
    }
}