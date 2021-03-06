﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace GoodSamaritan.Models.SmartEntity
{
    public class CityOfAssaultModel
    {
        [Key]
        public int CityOfAssaultId { get; set; }

        [MaxLength(64)]
        [Display(Name = "City Of Assault")]
        public string CityOfAssault { get; set; }

        public List<SmartModel> SmartEntity { get; set; }
    }
}