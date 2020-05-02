export const data = {

    menu_sessions: ["empresa", "tienda", "launch", "testimonios", "contacto"],

    empresa: `Banca nace frente a la creciente demanda de tierra en España. Nuestra misión es ofrecer
    a un amplio abanico de clientes una compra fácil, económica y personalizada. <br> <br>
    El estrecho trato con ellos es nuestro sello de identidad.
     Evaluamos cada necesidad, ofreciendo soluciones a medida.<br> <br>
    El trabajo constante y comprometido hace de Banca
     una empresa que se consolida día a día. La confianza
    depositada por nuestros clientes es nuestra mayor recompensa.`,

    products: [
        {
            name: "Premium-boxes",
            description: "Las premium-boxes son sin duda el producto predilecto del cliente más exigente. Ofrecemos diversos tamaños que se ajustan a cada encargo.",
            price: "330",
            img: "0",
            description_more: "La personalización de los pedidos es nuestro sello de identidad. Garantizamos tierra a la altura de sus necesidades."
        },

        {
            name: "Tiny-bags",
            description: "Las tiny-bags son una alternativa original y atractiva frente a la adquisición de tierra, fáciles de transportar y a precios razonables.",
            price: "220",
            img: "1",
            description_more: "La personalización de los pedidos es nuestro sello de identidad. Garantizamos tierra a la altura de sus necesidades.las tiny-bags te garantizan un acceso rápido a la tierra."
        },
        {
            name: "Earth xKg",
            description: "Nos preocupamos también por el cliente mayorista, ofreciéndole un producto de calidad al mejor precio de mercado.",
            price: "130",
            img: "2",
            description_more: "Earth xKg conjuga calidad y precio, siendo la alternativa ideal para aquellos interesados en adquirir grandes cantidades de tierra. Conocemos sus necesidades y somos expertos en satifacerlas."
        }
    ],

    testimonies: [
        {
            name: "Mariano Rajoy",
            testimony: `"Descubrir a Banca ha sido inolvidable. Hacía tiempo no me sentía tan satisfecho con un producto. Calidad, precio, y el trato que todo cliente muy español y mucho español merece."`,
            img: "0"
        },
        {
            name: "José María Aznar",
            testimony: `"Saber que hay una empresa española que garantiza una excelente comercialización de la tierra es signo de prosperidad. España necesita empresas modelos y Banca es una de ellas."`,
            img: "1"
        },
        {
            name: "Jose Luis Zapatero",
            testimony: `"Banca traza un camino en la venta de tierra en España, lo que me llena de orgullo. Ya obtuve mi pequeña earth-box. Totalmente satisfecho."`,
            img: "2"
        }
    ],
    sold: [
        {
            name: "Premium-boxes",
            quantity: 4,
            price: 330
        },

        {
            name: "Tiny-bags",
            quantity: 2,
            price: 220
        },
        {
            name: "Earth xKg",
            quantity: 1,
            price: 130
        }
    ]
};

export const signFormData = {
    button: "sign up",
    title: "Sign up!",
    inputs: [{
        type: "text",
        className: "form-control name",
        autoComplete: "username",
        placeholder: "nombre",
        name: "name"
    }, {
        type: "text",
        className: "form-control street",
        autoComplete: "street",
        placeholder: "calle",
        name: "street"
    }, {
        type: "number",
        className: "form-control zip-code",
        autoComplete: "zip_code",
        placeholder: "codigo postal",
        name: "zip_code"
    }, {
        type: "text",
        className: "form-control city",
        autoComplete: "city",
        placeholder: "ciudad",
        name: "city"
    }, {
        type: "text",
        className: "form-control email",
        autoComplete: "email",
        placeholder: "email",
        name: "email"
    }, {
        type: "password",
        className: "form-control password",
        autoComplete: "password",
        placeholder: "password",
        name: "password"
    }, {
        type: "file",
        className: "form-control file",
        name: "uploadedFile"
    }]
}

export const loginFormData = {
    button: "log in",
    title: "Login!",
    inputs: [{
        type: "text",
        className: "form-control name",
        autoComplete: "email",
        placeholder: "email",
        name: "email"
    }, {
        type: "password",
        className: "form-control password",
        autoComplete: "current-password",
        placeholder: "password",
        name: "password"
    }]
}

export const updateFormData = {
    button: "modificar",
    title: "Modifica tu cuenta!",
    inputs: [{
        type: "text",
        className: "form-control name",
        autoComplete: "username",
        placeholder: "new nick name",
        name: "name"
    }, {
        type: "text",
        className: "form-control street",
        autoComplete: "street",
        placeholder: "calle",
        name: "street"
    }, {
        type: "number",
        className: "form-control zip-code",
        autoComplete: "zip_code",
        placeholder: "codigo postal",
        name: "zip_code"
    }, {
        type: "text",
        className: "form-control city",
        autoComplete: "city",
        placeholder: "ciudad",
        name: "city"
    }, {
        type: "password",
        className: "form-control newpassword",
        autoComplete: "new-password",
        placeholder: "new password",
        name: "new_password"
    }, {
        type: "password",
        className: "form-control password",
        autoComplete: "current-password",
        placeholder: "password",
        name: "password"
    }, {
        type: "file",
        className: "form-control file",
        name: "uploadedFile"
    }]
}

export const contactFormData = {
    button: "enviar",
    title: "Contactenos!",
    inputs: [{
        type: "text",
        className: "form-control name",
        autoComplete: "username",
        placeholder: "nombre",
        name: "name"
    }, {
        type: "text",
        className: "form-control name",
        autoComplete: "email",
        placeholder: "email",
        name: "email"
    }, {
        type: "text",
        className: "form-control message",
        placeholder: "mensaje",
        name: "message"
    }]
}