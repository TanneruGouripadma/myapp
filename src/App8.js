<script>
            const S1 =() =>
            {
                a=N.value
                b=P.value
                alert ("account created")
            }
            const S2 =() =>
            {
                container.innerHTML=""
                str =""
                str+=`
                <h1>LOGIN</h1>
                <input type="text"; placeholder="username" id="g"><br><br>
                <input type="password"; placeholder="password" id="k"><br><br>
                <button onclick ="S3()">CREATE A NEW ACCOUNT</button>`
                container.innerHTML=str;
            }
            const S3=() =>
            {
                if(g.value==a && k.value==b)
                {
                    alert("successfully logged in")
                }
                else
                {
                    alert("invalid credentails")
                }
            }
        </script>