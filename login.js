

document.addEventListener("DOMContentLoaded", function() {
    const users = 
    [   {idNumber: "12345678", password: "saapshs2025"},
        {idNumber: "20143200", password: "saapshs2025"},
        {idNumber: "20132864", password: "saapshs2025"},
        {idNumber: "20132850", password: "saapshs2025"},
        {idNumber: "20163912", password: "saapshs2025"},
        {idNumber: "20240094", password: "saapshs2025"},
        {idNumber: "20240151", password: "saapshs2025"},
        {idNumber: "20132825", password: "saapshs2025"},
        {idNumber: "20200246", password: "saapshs2025"},
        {idNumber: "20132914", password: "saapshs2025"},
        {idNumber: "20200409", password: "saapshs2025"},
        {idNumber: "20240125", password: "saapshs2025"},
        {idNumber: "20240275", password: "saapshs2025"},
        {idNumber: "20200131", password: "saapshs2025"},
        {idNumber: "20200246", password: "saapshs2025"},
        {idNumber: "20200229", password: "saapshs2025"},
        {idNumber: "20240313", password: "saapshs2025"},
        {idNumber: "20132980", password: "saapshs2025"},
        {idNumber: "20200127", password: "saapshs2025"},
        {idNumber: "20240197", password: "saapshs2025"},
        {idNumber: "20240042", password: "saapshs2025"},
        {idNumber: "20200143", password: "saapshs2025"},
        {idNumber: "20200174", password: "saapshs2025"},
        {idNumber: "20200176", password: "saapshs2025"},
        {idNumber: "20220385", password: "saapshs2025"},
        {idNumber: "20143155", password: "saapshs2025"},
        {idNumber: "20240042", password: "saapSHS2025"},
        {idNumber: "20200143", password: "saapSHS2025"},
        {idNumber: "20200174", password: "saapSHS2025"},
        {idNumber: "20200176", password: "saapSHS2025"},
        {idNumber: "20220385", password: "saapSHS2025"},
        {idNumber: "20200409", password: "saapSHS2025"},
        {idNumber: "20240125", password: "saapSHS2025"},
        {idNumber: "20240275", password: "saapSHS2025"},
        {idNumber: "20200131", password: "saapSHS2025"},
        {idNumber: "20200374", password: "saapSHS2025"},
        {idNumber: "20240094", password: "saapSHS2025"},
        {idNumber: "20240151", password: "saapSHS2025"},
        {idNumber: "20132825", password: "saapSHS2025"},
        {idNumber: "20200246", password: "saapSHS2025"},
        {idNumber: "20132914", password: "saapSHS2025"},
        {idNumber: "20200229", password: "saapSHS2025"},
        {idNumber: "20240313", password: "saapSHS2025"},
        {idNumber: "20132980", password: "saapSHS2025"},
        {idNumber: "20200127", password: "saapSHS2025"},
        {idNumber: "20240197", password: "saapSHS2025"},
        {idNumber: "20143200", password: "saapSHS2025"},
        {idNumber: "20132864", password: "saapSHS2025"},
        {idNumber: "20132850", password: "saapSHS2025"},
        {idNumber: "20163912", password: "saapSHS2025"},
        {idNumber: "20200298", password: "saapSHS2025"},
        {idNumber: "20200114", password: "saapSHS2025"},
        {idNumber: "20143155", password: "saapSHS2025"},
        {idNumber: "20240306", password: "saapSHS2025"},
        {idNumber: "20200034", password: "saapSHS2025"},
        {idNumber: "20143356", password: "saapSHS2025"},
        {idNumber: "20200156", password: "saapSHS2025"}
    ];

    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();
        
        const idNumber = document.getElementById("idNumber").value;
        const password = document.getElementById("password").value;
        
        const user = users.find(user => user.idNumber === idNumber && user.password === password);
        
        if (user) {
            window.location.href = "books.html"; // Change this to the destination page
        } else {
            alert("Invalid ID Number or Password");
        }
    });
});