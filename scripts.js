
let add = document.querySelector(".my-form");
add.addEventListener("submit",function (e){
    e.preventDefault();
    let temps = {
        method: 'addForm',
        name: this.querySelector("input[name=name]").value,
        description: this.querySelector("input[name=surname]").value,
        price: this.querySelector("input[name=age]").value,
        active: this.querySelector("input[name=num]").value,
    };

    let objFormData = new FormData();
    objFormData.append('image', this.querySelector("input[name=image]").files[0]);


    for (let item in temps){
        objFormData.append(item, temps[item]);
    }

    let response = fetch('handle.php', {
        method: 'POST',
        headers: {
            //'Content-Type': 'application/json;charset=utf-8'
        },
        body: objFormData
    }).then((response) => {
        return response.json();
    })
        .then((data) => {
            console.log(data)
            if ('error' in data) {
                console.log('ERROR')
                document.querySelector('.error').innerHTML = data.error;
            }
        });
})


let button = document.querySelectorAll('button.delete');
button.forEach(function (item) {
    item.addEventListener('click', function (e) {
        let productId = this.dataset.id;
        let params = {
            'id': productId,
            'method': "delete"
        };
        let response = fetch('handle.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(params)
        });
    });
});
let updatesButtons = document.querySelectorAll('.update');
updatesButtons.forEach(function (item) {
    console.log(item);
    item.addEventListener('click', function () {
        let popupButton = document.querySelector('.popup');
        popupButton.style.display = 'flex';
        console.log(popupButton);
        let productId = this.dataset.id;
        let params = {
            'id': productId,
            'method': "getProduct"
        };

        let response = fetch('handle.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(params)
        }).then((response) => {
            return response.json();
        })
            .then((data) => {
                console.log(data);
                let form = document.querySelector(".popup__form");
                form.querySelector("input[name=id]").value = data[0].id;
                form.querySelector("input[name=Name]").value = data[0].name;
                form.querySelector("input[name=Price]").value = data[0].price;
                form.querySelector("input[name=Active]").value = data[0].active;
                form.querySelector("input[name=Description]").value = data[0].description;
            });

    });
});

let formButton = document.querySelector(".popup__form");
console.log(formButton);
formButton.addEventListener("submit", function (e) {
    e.preventDefault();
    let temp = {
        method: 'update',
        id: this.querySelector("input[name=id]").value,
        name: this.querySelector("input[name=Name]").value,
        price: this.querySelector("input[name=Price]").value,
        active: this.querySelector("input[name=Active]").value,
        description: this.querySelector("input[name=Description]").value,
    };
    console.log(temp);
    let response = fetch('handle.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(temp)
    }).then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data)
        if ('error' in data) {
            console.log('ERROR')
            document.querySelector('.error').innerHTML = data.error;
        }
    });
});



