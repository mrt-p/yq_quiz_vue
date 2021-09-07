<?php
session_start();

if (isset($_SESSION['session_id'])) {
    $session_user = htmlspecialchars($_SESSION['session_user'], ENT_QUOTES, 'UTF-8');
    $session_id = htmlspecialchars($_SESSION['session_id']);
    
    
    header("location: ../quiz.html");
    
} else {
    printf("Effettua il %s per accedere all'area riservata", '<a href="../login.html">login</a>');
}