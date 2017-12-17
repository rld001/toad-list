using System;

namespace ToadApi.Model
{
    public class TodoItem
    {
        public long Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
