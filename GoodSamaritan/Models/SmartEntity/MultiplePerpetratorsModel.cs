﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace GoodSamaritan.Models.SmartEntity
{
    public class MultiplePerpetratorsModel
    {
        // Yes; No; N/A
        [Key]
        public string MultiplePerpetrators { get; set; }

        public List<SmartModel> SmartEntity { get; set; }
    }
}