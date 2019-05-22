<?php
    $input = $_POST['json_data'];
    $fileToModify = file_get_contents('../currUser.json');
    $data = json_decode($fileToModify, true);
    
    if(!in_array($input, $data['friends'])){
        array_push($data['friends'],(int)$input);
    }

    $newJsonString = json_encode($data);
    file_put_contents('../currUser.json', $newJsonString);
?>