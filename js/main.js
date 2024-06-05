let isConnected = false;
var test = 0;

document.getElementById('connect-button').addEventListener('click', function () {
    // Simule la connexion/déconnexion
    isConnected = !isConnected;
    updateConnectionStatus();
});

function updateConnectionStatus() {
    const connectButton = document.getElementById('connect-button');
    if (isConnected) {
        connectButton.textContent = 'Déconnecter';
        connectButton.classList.add('connected');
        console.log('Robot connecté');
    } else {
        connectButton.textContent = 'Connecter';
        connectButton.classList.remove('connected');
        console.log('Robot déconnecté');
    }
}

document.getElementById('forward').addEventListener('click', function () {
    if (isConnected) {
        console.log('Avancer');
        // Ajoutez ici la logique pour envoyer la commande "avancer" au robot
    } else {
        console.log('Le robot n\'est pas connecté');
    }
});

document.getElementById('backward').addEventListener('click', function () {
    if (isConnected) {
        console.log('Reculer');
        // Ajoutez ici la logique pour envoyer la commande "reculer" au robot
    } else {
        console.log('Le robot n\'est pas connecté');
    }
});

document.getElementById('left').addEventListener('click', function () {
    if (isConnected) {
        console.log('Gauche');
        // Ajoutez ici la logique pour envoyer la commande "gauche" au robot
    } else {
        console.log('Le robot n\'est pas connecté');
    }
});

document.getElementById('right').addEventListener('click', function () {
    if (isConnected) {
        console.log('Droite');
        // Ajoutez ici la logique pour envoyer la commande "droite" au robot
    } else {
        console.log('Le robot n\'est pas connecté');
    }
});

document.getElementById('stop').addEventListener('click', function () {
    if (isConnected) {
        console.log('Stop');
        test++;
        // Ajoutez ici la logique pour envoyer la commande "stop" au robot
    } else {
        console.log('Le robot n\'est pas connecté');
    }
});
