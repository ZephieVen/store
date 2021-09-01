const storeItems = [
  {
    name: 'TV',
    price: 800.00,
    inStock: true,
    details: '4K Ultra HD'
  },
  {
    name: 'Phone',
    price: 700.00,
    inStock: false,
    details: '5G'
  },
  {
    name: 'Game Console',
    price: 300.00,
    inStock: true,
    details: 'The latest and greatest'
  },
  {
    name: 'Laptop',
    price: 1200.00,
    inStock: true,
    details: '16GB RAM 1TB SSD'
  },
  {
    name: 'Smart Watch',
    price: 200.00,
    inStock: false,
    details: 'Counts your steps'
  },
  {
    name: 'Headphones',
    price: 100.00,
    inStock: true,
    details: 'Clearest music to be heard'
  },
  {
    name: 'Keyboard',
    price: 100.00,
    inStock: true,
    details: 'Types for you'
  },
  {
    name: 'HDMI Cord',
    price: 100.00,
    inStock: true,
    details: 'HDMI to USB type C'
  },
  {
    name: 'Monitor',
    price: 300.00,
    inStock: true,
    details: '4K Ultra HD'
  },
  {
    name: 'Speaker',
    price: 200.00,
    inStock: true,
    details: 'Clearest music to be heard'
  },
  {
    name: 'Video Game',
    price: 60.00,
    inStock: true,
    details: 'Enjoy for hours'
  },
];
let isDarkMode = true;
let del = "apricot";
storeItems.forEach(fillProductList);

function fillProductList(item, index, arr){

  if(item.inStock){
    $("#products").append("<li><span>$" + item.price + "</span><span>" + item.name + "</span><span>"+item.details+"</span></li>")
  }else {
    console.log("Sorry, " + item.name + " is not in stock")
  }

}

$(".toggle").click(function(){
  if(isDarkMode){
    $("body").removeClass("darkMode");
    isDarkMode = false;
  }else{
    $("body").addClass("darkMode");
    isDarkMode = true;
  }
});
