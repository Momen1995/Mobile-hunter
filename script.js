const loadPhone = async () =>{
  const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
  const data = await res.json();
  const phones = data.data
  displayPhones(phones)
}

const displayPhones = (phones) =>{
  console.log(phones)
  const mainContainer = document.getElementById("main-container");
  phones.forEach(phone =>{
    const mainDiv = document.createElement("div");
    mainDiv.innerHTML = `
    <div class="card bg-base-200 shadow-lg px-4 py-5 h-full">
          <figure><img src="${phone.image}" alt="mobiles" /></figure>
          <div class="card-body">
            <h2 class="card-title">${phone.brand}</h2>
            <h3 class="text-[12px">${phone.phone_name}</h3>
            <h4 class="text-[10px">${phone.slug}</h4>
            <div class="card-actions justify-center mt-5">
              <button class="btn bg-blue-500 text-white">Buy Now</button>
            </div>
          </div>
        </div>
    `;
    mainContainer.appendChild(mainDiv)
  })
}



loadPhone()