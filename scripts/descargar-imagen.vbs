Dim url, filePath
url = "https://images.pexels.com/photos/3845712/pexels-photo-3845712.jpeg"
filePath = "C:\Users\serga\Dropbox\generador-proyecto-intermodular-agentes\proyectos\01-Informatica\DAM\Segundo\SEGUNDO-DAM-APP-CITAS-MEDICAS\images\hero.jpg"

Dim http, stream
Set http = CreateObject("MSXML2.ServerXMLHTTP")
http.Open "GET", url, False
http.setRequestHeader "User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
http.send

If http.status = 200 Then
    Set stream = CreateObject("ADODB.Stream")
    stream.Open
    stream.Type = 1
    stream.Write http.responseBody
    stream.SaveToFile filePath, 2
    stream.Close
    Set stream = Nothing
    WScript.Echo "Imagen descargada correctamente: " & filePath
Else
    WScript.Echo "Error al descargar: " & http.status & " - " & http.statusText
End If

Set http = Nothing
