using System.Collections.Generic;
using adminant.Models;
using Microsoft.AspNetCore.Components;

namespace adminant.Pages.Account.Center
{
    public partial class Articles
    {
        [Parameter] public IList<ListItemDataType> List { get; set; }
    }
}