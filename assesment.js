 const u = document.getElementById("u");
      let i=0;
      const btn = document.getElementsByTagName("button");
      const input = document.getElementById("inp");
      btn[0].addEventListener("click", () => {
         const  li=document.createElement("li");
         li.textContent=input.value;
         u.appendChild(li);
      });
      document.getElementById("lbtn").addEventListener("click", ()=> {
          document.body.style.backgroundColor="pink";
      })

      const gettable = document.getElementById("table");
      const accessdata = async () => {
        try {
          const response = await fetch("./asmt.json");
          const data = await response.json();

          data.forEach((el) => {
            const row = gettable.insertRow();

            const name = row.insertCell(0);
            const age = row.insertCell(1);
            const course = row.insertCell(2);

            name.textContent = el.name;
            age.textContent = el.age;
            course.textContent = el.course;
          });
        } catch (err) {
          console.log("error", err);
        }
      };

      accessdata();
      