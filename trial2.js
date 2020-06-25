//Added a little more functionality to allow a "woke" user to change the title of the Show

function meme()
{
	document.getElementById("Meme").textContent = "Meme";
}

function meme1()
{
	document.getElementById("Meme1").textContent = "Meme";
}

function meme2()
{
	document.getElementById("Meme2").textContent = "Meme";
}

function meme3()
{
	document.getElementById("Meme3").textContent = "Meme";
}

function meme4()
{
	document.getElementById("Meme4").textContent = "Meme";
}

function meme5()
{
	document.getElementById("Meme5").textContent = "Meme";
}

// Had to add multiple functions to do the same action on different elements separately, since an id is unique


//More stupid humour

function gulag() {
  var a =confirm("This action will cause you to be sent to Gulag you capitalist scum! Proceed?")
  

//   if (a == true) {
//   document.getElementById("rick").setAttribute('href', 'https://youtu.be/oHg5SJYRHA0');

// } 
// else {
//   document.getElementById("rick").setAttribute('href', 'https://politecat420.github.io/');
// }
}

function dumb() {
 alert("Click one of the actual topics below you dum dum")
}


// In order to allow for more interactivity on the webpage, I decided to allow users to shift between 2 images of each member of "The Crew"

let yas = document.getElementById("Yas")
yas.addEventListener('click', () =>
	{
		if (yas.src.match("Yasser.jpg")) // I just added an id to each image called in the .html file and the interactivity is added by changing the src name of the images used when matched with the right id
		{yas.src="Yasser2.jpg";
		}

		// The if/else statement allows the user to continuously shift between the 2 images

	else{
		yas.src="Yasser.jpg";
		}	
	}
)


let yous = document.getElementById("Yous")
yous.addEventListener('click', () =>
	{
		if (yous.src.match("Youssef.jpg")) 
		{yous.src="Youssef2.jpg";
		}

	else{
		yous.src="Youssef.jpg";
		}	
	}
)


let yah = document.getElementById("Yah")
yah.addEventListener('click', () =>
	{
		if (yas.src.match("Yahia.jpg")) 
		{yah.src="Yahia2.jpg";
		}

	else{
		yah.src="Yahia.jpg";
		}	
	}
)



let ram = document.getElementById("Ram")
ram.addEventListener('click', () =>
	{
		if (ram.src.match("Ramon.jpg")) 
		{ram.src="Ramon2.jpg";
		}

	else{
		ram.src="Ramon.jpg";
		}	
	}
)