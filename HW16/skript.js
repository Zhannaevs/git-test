let cart = [];



function addToCart(name = prompt('Введите имя товара'), price = prompt('Введите цену товара'), amount = prompt('Введите количетсво товара'), category = prompt('Введите категорию товара')) {
	let product = {
        id: Math.random(),
        name: ' ',
        price: 0,
        amount: 0,
        sum: 0,
        category: ' ',
    };
    
        product.name = name;
		product.price = price;
		product.category = category;
		product.amount = amount;
		product.sum = product.price * product.amount;
        
        cart.push(product)
        console.log(cart)
    }
    
   
	addToCart(promt('Введите имя товара'),promt ('Введите цену товара'));
