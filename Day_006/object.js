let emp =
{
    emapname: "scotte",     empid: 1021,    job:"Engineer",     basicsal:50000,
    bonus: function()
    {
        return (((this.basicsal*.10)+this.basicsal));
    }
};

console.log(emp.bonus());