$("#container").querySelector({
    mode: "read",
    days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ],
    hour: 12,
    data: [
        {
            day: 0,
            periods: [
                ["10pm", "12am"],
                ["12am", "2:30am"]
            ]
        }
    ]
});