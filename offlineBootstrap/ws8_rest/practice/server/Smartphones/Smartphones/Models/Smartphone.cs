using Microsoft.AspNetCore.Components.Web.Virtualization;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Smartphones.Models
{
    public class Smartphone
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        public string Model { get; set; }
        [Range(0, float.MaxValue)]
        public float Price { get; set; }
        [Range(0, float.MaxValue)]
        public float ScreenSize { get; set; }
        [Range(0, 5)]
        public float Rating { get; set; }
        public bool IsAvailable { get; set; }
    }
}
