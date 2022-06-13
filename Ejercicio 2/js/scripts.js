// Inicializar Firebase
const firebaseConfig = {
    apiKey: "AIzaSyARBf4O9u-lsd0tQO4P1DelroHuWTequwg",
    authDomain: "examen-firebase-m2.firebaseapp.com",
    projectId: "examen-firebase-m2",
    storageBucket: "examen-firebase-m2.appspot.com",
    messagingSenderId: "216601604580",
    appId: "1:216601604580:web:28815d5bdc3dca469657f1"
    };
    const app = firebase.initializeApp(firebaseConfig);

    // Referencia a la colección messages
    const messagesRef = firebase.database().ref('messages');
    
    // Esperando el envío de mensajes
    document.getElementById('contactForm').addEventListener('submit', submitForm);
    
    // Enviar formulario
    function submitForm(e){
      e.preventDefault();
    
      // Obtener valores
      const name = getInputVal('name');
      const email = getInputVal('email');
      const website = getInputVal('website');
      const budget = getInputVal('budget');
      const timeline = getInputVal('timeline');
      const suma = getInputVal('suma');
      const message = getInputVal('message');
  
      // Guardar mensaje
      saveMessage(name, email, website, budget, timeline, suma, message);
    
      // Mostrar alerta
      document.querySelector('.alert').style.display = 'block';
    
      // Ocultar alerta después de 3 segundos
      setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
      },3000);
    
      // Limpiar formulario
      document.getElementById('contactForm').reset();
    }
    
    // Función para obtener el valor del formulario
    function getInputVal(id){
      return document.getElementById(id).value;
    }
    
    // Guardar el mensaje en Firebase
    function saveMessage(name, email, website, budget, timeline, suma, message){
      const newMessageRef = messagesRef.push();
      newMessageRef.set({
        name: name,
        email: email,
        website: website,
        budget: budget,
        timeline: timeline,
        suma: suma,
        message: message,
      });
    }
  
    function busca_mensajes() {   
  
      const db = firebase.database();
      const ref = db.ref("messages");
      
      const table_header = document.getElementById("tabla-header");
      const table = document.getElementById("tabla");
          
      //limpia la tabla
      table.innerHTML = "";     
       //con esta función recorre todos los datos almacenados en FB ordenados por mi child(tipo)
      
       const row_header = table_header.insertRow(0);
       const cell1_header = row_header.insertCell(0);
       const cell2_header = row_header.insertCell(1);
       const cell3_header = row_header.insertCell(2);
       const cell4_header = row_header.insertCell(3);
       const cell5_header = row_header.insertCell(4);
       
       // asigna a las celdas el valor del Child especificado
       cell1_header.innerHTML = "Name";
       cell2_header.innerHTML = "Email";
       cell3_header.innerHTML = "Website";
       cell4_header.innerHTML = "Budget";
       cell5_header.innerHTML = "Message";
  
      ref.orderByChild("email").on("child_added", function(snapshot){
      //repite el proceso como cuantas referencias encuentre y los asigna a la lista "referencia"
           
      const referencia = snapshot.val();
          
      const row = table.insertRow(0);
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      const cell3 = row.insertCell(2);
      const cell4 = row.insertCell(3);
      const cell5 = row.insertCell(4);
        
        // asigna a las celdas el valor del Child especificado
        cell1.innerHTML = referencia.name;
        cell2.innerHTML = referencia.email;
        cell3.innerHTML = referencia.website;
        cell4.innerHTML = referencia.budget;
        cell5.innerHTML = referencia.message;
    });
}