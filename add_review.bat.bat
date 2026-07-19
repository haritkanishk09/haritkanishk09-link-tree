@echo off
setlocal enabledelayedexpansion

:: File names
set "target_file=reviews.html"
set "temp_file=temp.html"
set "marker=<!-- Ye hai review card ka template, ise copy karke naye reviews add kar sakte ho -->"

:: Naye review ka content yahan likho
set "new_review=<div class="glass-card"><img src="images/reviews/your-poster.jpg" class="poster-img"><div><h3><a href="#" target="_blank" style="color: #fff; text-decoration: none;">New Movie</a></h3><p class="rating">4</p><p>Yahan tumhara review text aayega.</p></div></div>"

:: Process the file
(
    for /f "tokens=* delims=" %%a in (%target_file%) do (
        echo %%a
        set "line=%%a"
        if "!line!"=="%marker%" (
            echo %new_review%
        )
    )
) > %temp_file%

:: Replace original with temp
move /y %temp_file% %target_file%

echo Review successfully added!
pause