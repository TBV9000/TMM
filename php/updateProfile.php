<?php
    // Get the JSON object that is passed in from ajax
    $input = json_decode($_POST['json_data'], true);
    // get the JSON from the file that we wish to modify and decode it
    $getFileToChange = file_get_contents('../currUser.json');
    $data = json_decode($getFileToChange, true);
    // Update the JSON values 
    $data['screenName'] = $input['screenName'];
    $data['age'] = $input['age'];
    $data['yearsExp'] = $input['yearsExp'];
    $data['gamesPlayed'] = $input['gamesPlayed'];
    $data['roleplaySliderTo'] = $input['roleplaySliderTo'];
    $data['roleplaySliderFrom'] = $input['roleplaySliderFrom'];
    $data['contentSliderTo'] = $input['contentSliderTo'];
    $data['contentSliderFrom'] = $input['contentSliderFrom'];
    $data['humorSliderTo'] = $input['humorSliderTo'];
    $data['humorSliderFrom'] = $input['humorSliderFrom'];
    $data['violenceSliderTo'] = $input['violenceSliderTo'];
    $data['violenceSliderFrom'] = $input['violenceSliderFrom'];
    $data['groupSize'] = $input['groupSize'];
    $data['icon'] = $input['icon'];
    $data['friends'] = [];

    // Encode the JSON and save to specified file
    $newJsonString = json_encode($data);
    file_put_contents('../currUser.json', $newJsonString);
	echo "<script>alert('hello')</script>";
?>