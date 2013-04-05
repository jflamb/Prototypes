var itemTemplate = "<ul>\
{{each items}}\
<li>\
    <a href='#'>\
        {{if typeof(symbol) != 'undefined'}}\
        <span class='symbol' title='${type}'>${symbol}</span>\
{{else typeof(count) != 'undefined'}}\
<span class='${type}'>${count}</span>\
{{/if}}\
<span><strong>${name}</strong></span>\
<span class='subdued'>\
    {{if typeof(image) != 'undefined'}}\
    <img src='${image}' />\
    {{/if}}\
    ${description}\
</span>\
</a>\
</li>\
{{/each}}\
</ul>";

var recentItems = [
    {
        "group": "Today",
        "items": [
            {
                "symbol": "&#xE188",
                "type": "Project",
                "name": "Rapid Rain",
                "description": "7 members"
            },
            {
                "symbol": "&#xE125",
                "type": "Team",
                "name": "Freezing Fog / Front-end",
                "description": "5 member team"
            }
        ]
    },
    {
        "group": "Yesterday",
        "items": [
            {
                "symbol": "&#xE188",
                "type": "Project",
                "name": "Sudden Storm",
                "description": "11 members"
            },
            {
                "symbol": "&#x1F4AC",
                "type": "Room",
                "name": "Freezing Fog Team Room",
                "description": "Who can work on this bug?"
            }
        ]
    }
];

var favoriteItems = [
    {
        "group": "Freezing Fog",
        "items": [
            {
                "count": "12",
                "type": "work",
                "name": "Active Bugs",
                "description": "12 active"
            },
            {
                "symbol": "&#x1F4E5",
                "type": "Build definition",
                "name": "Continuous Delivery",
                "image": "images/StatusAnnotations_Complete_and_ok_16xMD_color.png",
                "description": "succeeded for Jim Lamb"
            }
        ]
    },
    {
        "group": "Sudden Storm",
        "items": [
            {
                "count": "3",
                "type": "work",
                "name": "Active Bugs",
                "description": "3 active"
            },
            {
                "count": "10",
                "type": "work",
                "name": "Backlog",
                "description": "3 new, 7 in progress"
            },
            {
                "symbol": "&#x1F4E5",
                "type": "Build definition",
                "name": "Nightly",
                "image": "images/StatusAnnotations_Critical_16xMD_color.png",
                "description": "failed 9h ago"
            },
            {
                "count": "5",
                "type": "code",
                "name": "Solutions\\",
                "description": "Updated dependencies to latest"
            }
        ]
    }
];

var newsItems = [
    {
        "title": "Fixed the incorrect order of the first column on the Kanban board on the service",
        "url": "http://blogs.msdn.com/b/visualstudioalm/archive/2013/03/14/fixed-the-incorrect-order-of-the-first-column-on-the-kanban-board-on-the-service.aspx",
        "age": "4 days ago"
    },
    {
        "title": "Team Foundation Service Updates",
        "url": "http://tfs.visualstudio.com/en-us/home/news/2013/mar-4/",
        "age": "2 weeks ago"
    }
];
