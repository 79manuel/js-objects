/*
I want to calculate Bombardier sales in Alberta (AB)
- To calculate sales in AB for Bombardier I add all
the elementes of the array in the sales key





-I can create a function to calculate sales only for
 Bombardier


*/
var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];



function calculateSalesTax(salesData, taxRates) {
  var output = {};
    for (var i = 0; i < salesData.length; i++) {
      var companySales = salesData[i].sales;
      var companyName = salesData[i].name;
      var companyProvince= salesData[i].province;
      var provinceTax = taxRates[companyProvince];

    for (var j = 0; j < companySales.length; j++) {
        if (output[companyName]){
      output[companyName].totalSales += companySales[j];
      output[companyName].totalTaxes += companySales[j] * provinceTax;
      } else {
      output[companyName] = { "totalSales":  companySales[j], "totalTaxes": companySales[j] * provinceTax };
    }
  }
}
  return output;

};

console.log(calculateSalesTax(companySalesData, salesTaxRates));
