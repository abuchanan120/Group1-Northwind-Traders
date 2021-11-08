
//Fill in the email, key, and projectId variables with your own information for your firebase project


// Activate sheet by Name
function activateSheetByName(sheetName) {
  var sheet = SpreadsheetApp.getActive().getSheetByName(sheetName);
  sheet.activate();
  return sheet;
}


// Test Firestore Connection & Authentication

function testFirestore() {
 var email = "";
  var key = "";
  var projectId = "";
var firestore = FirestoreApp.getFirestore(email, key, projectId);
const data = {
"name": "test!"
}
firestore.createDocument("TestCollection/FirstDocument", data)
Logger.log(data);
}

// Write Data to Firestore

// Notes: You will need to add the Firestore APP Library and set the version level
//    click Resources > Add a Library > paste in this string: 
// 1VUSl4b1r1eoNcRWotZM3e87ygkxvXltOgyDZhixqncz9lQ3MjfT1iKFw 
//.                   select the latest version from the dropdown


//. GCP Firestore billing is based on the Usage (reads and writes) You are allowed 
//. visit https://firebase.google.com/docs/firestore/quotas to learn more about free-tier usage

// To stay within the free-tier limits,  export a limited numdber of documents while you are working out the data field names and values
// You can do this by changing the loop counter (in the example below I use 10)
// You can get the whole set of documents by using the data.length object as the loop counter limit
//  once you have the data migrating from the Google Sheet to Firestore. Below is the code for a loop using the data.length object

// for(var i = 1; i < data.length; i++) {

// -------  Write Customer Data to Firestore --------------------------------------------------
function writeCustomerDataToFirebase() {
 var email = "";
  var key = "";
  var projectId = "";
var firestore = FirestoreApp.getFirestore(email, key, projectId);
  // var url = SpreadsheetApp.getActiveSpreadsheet().getUrl();
  var sheetName = 'customers';
  var url = SpreadsheetApp.getActiveSpreadsheet().getUrl();
var ss = SpreadsheetApp.openByUrl(url);
// var sheet = ss.getSheets()[0];
// var sheet = ss.getSheetByName(sheetName);
  var sheet = activateSheetByName(sheetName);
  Logger.log(sheetName);
var data = sheet.getDataRange().getValues();
var dataToImport = {};
// Logger.log(data.length);
  
// CustomerID, CompanyName, ContactName, ContactTitle, Address, City, Region, PostalCode, Country, Phone, Fax
  // for(var i = 1; i < data.length; i++) {
  
for(var i = 1; i < 10; i++) {
var CustomerID = data[i][0];
var CompanyName = data[i][1];
  Logger.log(CustomerID + '-' + CompanyName);
dataToImport[CustomerID + '-' + CompanyName] = {
CustomerID: CustomerID,
CompanyName: CompanyName,
ContactName:data[i][2],
ContactTitle:data[i][3],
Address:data[i][4],
City:data[i][5],
  Region:data[i][6],
PostalCode:data[i][7],
Country:data[i][8],
Phone:data[i][9],
Fax:data[i][10]
};
firestore.createDocument("Customers2/", dataToImport[CustomerID + '-' + CompanyName]);
// Logger.log(dataToImport);
}
}

// --------------- Write Employee Data to Firestore ---------------------------------

function writeEmployeeDataToFirebase() {
  var email = "";
  var key = "";
  var projectId = "";
  var firestore = FirestoreApp.getFirestore(email, key, projectId);
  // var url = SpreadsheetApp.getActiveSpreadsheet().getUrl();
  
  // Employees
  // EmployeeID, LastName, FirstName, Title, TitleOfCourtesy, BirthDate, HireDate, Address, City, Region, PostalCode, Country, HomePhone, Extension, Photo, Notes, ReportsTo

  var sheetName = 'employees';
  var url = SpreadsheetApp.getActiveSpreadsheet().getUrl();
  var ss = SpreadsheetApp.openByUrl(url);
  var sheet = activateSheetByName(sheetName);
Logger.log(sheetName);
  
  var data = sheet.getDataRange().getValues();
  var dataToImport = {};
  
// Logger.log(data.length); // the number of rows in the sheet
  
  // Use this loop code if you want all rows in the sheet: 
  //   for(var i = 1; i < data.length; i++) {
  
for(var i = 1; i < 10; i++) {
 var EmployeeID = data[i][0];
 var LastName = data[i][1];
Logger.log(EmployeeID + '-' + LastName);
 dataToImport[EmployeeID + '-' + LastName] = {

   EmployeeID: data[i][0],
   LastName:data[i][1],
   FirstName:data[i][2],
   Title:data[i][3],
   TitleOfCourtesy:data[i][4],
   BirthDate:data[i][5],
   HireDate:data[i][6],
   Address:data[i][7],
   City:data[i][8],
   Region:data[i][9],
   PostalCode:data[i][10],
   Country:data[i][11],
   HomePhone:data[i][12],
   Extension:data[i][13],
   Photo:data[i][14],
   Notes:data[i][15],
   ReportsTo:data[i][6]
};

firestore.createDocument("Employees/", dataToImport[EmployeeID + '-' + LastName]);
// Logger.log(dataToImport);
}
}


// --------------- Write Suppliers Data to Firestore ---------------------------------

function writeSuppliersDataToFirebase() {
 var email = "";
  var key = "";
  var projectId = "";
  var firestore = FirestoreApp.getFirestore(email, key, projectId);
  // var url = SpreadsheetApp.getActiveSpreadsheet().getUrl();
  
  // Suppliers
  // SupplierID	CompanyName	ContactName	ContactTitle	Address	City	Region	PostalCode	Country	Phone	Fax	HomePage
  
  var sheetName = 'suppliers';
  var url = SpreadsheetApp.getActiveSpreadsheet().getUrl();
  var ss = SpreadsheetApp.openByUrl(url);
  var sheet = activateSheetByName(sheetName);
Logger.log(sheetName);
  
  var data = sheet.getDataRange().getValues();
  var dataToImport = {};
  
// Logger.log(data.length); // the number of rows in the sheet
  
  // Use this loop code if you want all rows in the sheet: 
  //   for(var i = 1; i < data.length; i++) {
  
for(var i = 1; i < 10; i++) {
 var SupplierID = data[i][0];
 var CompanyName = data[i][1];
Logger.log(SupplierID + '-' + CompanyName);
 dataToImport[SupplierID + '-' + CompanyName] = {

   SupplierID:data[i][0],
   CompanyName:data[i][1],
   ContactName:data[i][2],
   ContactTitle:data[i][3],
   Address:data[i][4],
   City:data[i][5],
   Region:data[i][6],
   PostalCode:data[i][7],
   Country:data[i][8],
   Phone:data[i][9],
   Fax:data[i][10],
   HomePage:data[i][11]
   
};

firestore.createDocument("Suppliers/", dataToImport[SupplierID + '-' + CompanyName]);
// Logger.log(dataToImport);
}
}


// ---------------- Write Shippers Data to Firestore --------------

function writeShippersDataToFirebase() {
  var email = "";
  var key = "";
  var projectId = "";
  var firestore = FirestoreApp.getFirestore(email, key, projectId);
  // var url = SpreadsheetApp.getActiveSpreadsheet().getUrl();
  
  // Shippers
  // ShipperID	CompanyName	Phone
  
  var sheetName = 'shippers';
  var url = SpreadsheetApp.getActiveSpreadsheet().getUrl();
  var ss = SpreadsheetApp.openByUrl(url);
  var sheet = activateSheetByName(sheetName);
Logger.log(sheetName);
  
  var data = sheet.getDataRange().getValues();
  var dataToImport = {};
  
// Logger.log(data.length); // the number of rows in the sheet
  
  // Use this loop code if you want all rows in the sheet: 
  //   for(var i = 1; i < data.length; i++) {
  
for(var i = 1; i < data.length; i++) { 
 var ShipperID = data[i][0];
 var CompanyName = data[i][1];
Logger.log(ShipperID + '-' + CompanyName);
 dataToImport[ShipperID + '-' + CompanyName] = {

   ShipperID:data[i][0],
   CompanyName:data[i][1],
   Phone:data[i][2]   
};

firestore.createDocument("Shippers/", dataToImport[ShipperID + '-' + CompanyName]);
// Logger.log(dataToImport);
}
}

//------------------- Write Products Data to Firestore ----------------

function writeProductsDataToFirebase() {
  var email = "";
  var key = "";
  var projectId = "";
  var firestore = FirestoreApp.getFirestore(email, key, projectId);
  // var url = SpreadsheetApp.getActiveSpreadsheet().getUrl();
  
  // Products
  // ProductID	ProductName	SupplierID	CategoryID	QuantityPerUnit	UnitPrice	UnitsInStock	UnitsOnOrder	ReorderLevel	Discontinued
  
  var sheetName = 'products';
  var url = SpreadsheetApp.getActiveSpreadsheet().getUrl();
  var ss = SpreadsheetApp.openByUrl(url);
  var sheet = activateSheetByName(sheetName);
Logger.log(sheetName);
  
  var data = sheet.getDataRange().getValues();
  var dataToImport = {};
  
// Logger.log(data.length); // the number of rows in the sheet
  
  // Use this loop code if you want all rows in the sheet: 
  //   for(var i = 1; i < data.length; i++) {
  
for(var i = 1; i < 10; i++) { 
 var ProductID = data[i][0];
 var ProductName = data[i][1];
Logger.log(ProductID + '-' + ProductName);
 dataToImport[ProductID + '-' + ProductName] = {

   ProductID:data[i][0],
   ProductName:data[i][1],
   SupplierID:data[i][2],
   CategoryID:data[i][3],
   QuantityPerUnit:data[i][4],
   UnitPrice:data[i][5],
   UnitsInStock:data[i][6],
   UnitsOnOrder:data[i][7],
   ReorderLevel:data[i][8],
   Discontinued:data[i][9]
  
};

firestore.createDocument("Products/", dataToImport[ProductID + '-' + ProductName]);
// Logger.log(dataToImport);
}
}

//-------------------- Write Orders Data to Firestore -------------

function writeOrdersDataToFirebase() {
  var email = "";
  var key = "";
  var projectId = "";
  var firestore = FirestoreApp.getFirestore(email, key, projectId);
  // var url = SpreadsheetApp.getActiveSpreadsheet().getUrl();
  
  // Orders
  // OrderID	CustomerID	EmployeeID	OrderDate	RequiredDate	ShippedDate	ShipVia	Freight	ShipName	ShipAddress	ShipCity	ShipRegion	ShipPostalCode	ShipCountry
  
  var sheetName = 'orders';
  var url = SpreadsheetApp.getActiveSpreadsheet().getUrl();
  var ss = SpreadsheetApp.openByUrl(url);
  var sheet = activateSheetByName(sheetName);
Logger.log(sheetName);
  
  var data = sheet.getDataRange().getValues();
  var dataToImport = {};
  
// Logger.log(data.length); // the number of rows in the sheet
  
  // Use this loop code if you want all rows in the sheet: 
  //   for(var i = 1; i < data.length; i++) {
  
for(var i = 1; i < 10; i++) { 
 var OrderID = data[i][0];
 var CustomerID = data[i][1];
Logger.log(OrderID + '-' + CustomerID);
 dataToImport[OrderID + '-' + CustomerID] = {

   OrderID:data[i][0],
   CustomerID:data[i][1],
   EmployeeID:data[i][2],
   OrderDate:data[i][3],
   RequiredDate:data[i][4],
   ShippedDate:data[i][5],
   ShipVia:data[i][6],
   Freight:data[i][7],
   ShipName:data[i][8],
   ShipAddress:data[i][9],
   ShipCity:data[i][10],
   ShipRegion:data[i][11],
   ShipPostalCode:data[i][12],
   ShipCountry:data[i][13]

};

firestore.createDocument("Orders/", dataToImport[OrderID + '-' + CustomerID]);
// Logger.log(dataToImport);
}
}

// ------------------ Write Orders Details Data to Firestore -----------

function writeOrderDetailsDataToFirebase() {
  var email = "";
  var key = "";
  var projectId = "";
  var firestore = FirestoreApp.getFirestore(email, key, projectId);
  // var url = SpreadsheetApp.getActiveSpreadsheet().getUrl();
  
  // Order Details
  // ID	OrderID	ProductID	UnitPrice	Quantity	Discount		
  
  var sheetName = 'order_details';
  var url = SpreadsheetApp.getActiveSpreadsheet().getUrl();
  var ss = SpreadsheetApp.openByUrl(url);
  var sheet = activateSheetByName(sheetName);
Logger.log(sheetName);
  
  var data = sheet.getDataRange().getValues();
  var dataToImport = {};
  
// Logger.log(data.length); // the number of rows in the sheet
  
  // Use this loop code if you want all rows in the sheet: 
  //   for(var i = 1; i < data.length; i++) {
  
for(var i = 1; i < 10; i++) { 
 var ID = data[i][0];
 var ProductID = data[i][1];
Logger.log(ID + '-' + ProductID);
 dataToImport[ID + '-' + ProductID] = {

   ID:data[i][0],
   OrderID:data[i][1],
   ProductID:data[i][2],
   UnitPrice:data[i][3],
   Quantity:data[i][4],
   Discount:data[i][5],
   
  
};

firestore.createDocument("OrderDetails/", dataToImport[ID + '-' + ProductID]);
// Logger.log(dataToImport);
}
}

