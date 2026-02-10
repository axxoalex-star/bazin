$images = @{
    "hero-bg.jpg" = "https://bazin.municipiulbacau.ro/wp-content/uploads/2023/01/34400d76-ccd1-46ba-aa2b-0b252479c135.jpg"
    "about.png" = "https://bazin.municipiulbacau.ro/wp-content/uploads/2021/06/bazin-olimpic.png"
    "service-kids.png" = "https://bazin.municipiulbacau.ro/wp-content/uploads/2021/06/ss.png"
    "service-sauna.png" = "https://bazin.municipiulbacau.ro/wp-content/uploads/2021/06/s.png"
    "service-adults.png" = "https://bazin.municipiulbacau.ro/wp-content/uploads/2021/06/sss.png"
    "course-swim.jpg" = "https://bazin.municipiulbacau.ro/wp-content/uploads/2021/06/1-2-900x600-1.jpg"
    "sauna-detail.jpg" = "https://bazin.municipiulbacau.ro/wp-content/uploads/2016/06/ww.jpg"
}

$destDir = "c:/Users/ascafaru.PRIMARIABC/Desktop/Bazin/images"

# Ensure directory exists
if (!(Test-Path -Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir | Out-Null
}

foreach ($name in $images.Keys) {
    $url = $images[$name]
    $destPath = Join-Path -Path $destDir -ChildPath $name
    Write-Host "Downloading $url to $destPath..."
    try {
        Invoke-WebRequest -Uri $url -OutFile $destPath
        Write-Host "Success."
    } catch {
        Write-Host "Failed to download $name : $_"
    }
}
