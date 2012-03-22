<?php 
    $title = "HTML5 Practice";
    $subtitle = "Day 4";
?>
<!doctype html>
<html lang="en">
    <head>
         <meta charset="utf-8">
        <!-- <meta name="viewport" content="width=device-width, initial-scale=1"> 
	<link rel="stylesheet" href="http://code.jquery.com/mobile/1.1.0-rc.1/jquery.mobile-1.1.0-rc.1.min.css" />
         -->
        <title><?php echo "$title: $subtitle"; ?></title>
        <!-- <link href="css/default.css" rel="stylesheet" /> -->
        
        <!-- jQuery -->
        <!-- include jquery toolkit here -->
        
        <script data-main="scripts/main" src="scripts/require-jquery.js"></script>
        
        
        <!-- default javascript content -->
        <!-- include your default js file here -->
        
    </head>
    <body>
        <header>
            <h1><?php echo "<span class='title'>$title</span>: <span class='subtitle'>$subtitle</span>"; ?></h1>
        </header>

       
        <div id ="quotes"></div>
        
        
        <!-- add your content here -->
        <h3>-- Enjoy! --</h3>
        
        <footer>
            <div><?php echo $title; ?> v1.0</div>
            <div>@author Alberto Miranda <a href="mailto:alberto@nextive.com">&lt;alberto@nextive.com&gt;</a></div>
            <div>@author Esteban Abait <a href="mailto:esteban.abait@nextive.com">&lt;esteban.abait@nextive.com&gt;</a></div>
        </footer>
        
        
        
    </body>
</html>