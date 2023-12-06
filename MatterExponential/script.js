$(document).ready(function() {
    // variables
    let matter=new Decimal(0);
    const eulernum=new Decimal("2.71828182845904523536028747135266249775724709369995957496696762");
    let exponentforupg1=new Decimal(0.182322);
    let exponentforupg2=new Decimal("0.262364");
    let cheapUpgrade=new Decimal(0);
    let cheapUpgradeCost=new Decimal(1e30);
    let cheapUpgradeFactor=new Decimal(0.098);
    let exponentExponent=new Decimal(1);
    let exponentExponentCost=new Decimal(2e10);
    let maxMatter=new Decimal(10);
    let multiBuy=new Decimal(1);
    let clickamount=new Decimal(1);
    let upgradecost=new Decimal(10);
    let clickmulti=new Decimal(1);
    let upgrade2cost=new Decimal(100);
    let exponent=new Decimal(1);
    let upgrade3cost=new Decimal(4000);
    let firstTierRebirths=new Decimal(0);
    let hidden=[true, true, true, true];
    let autoexpand=false;
    let resetFULL=false;
    let end=false;
    // javascript code/game mechanics
    $("#resetUpgrade").click(function() {
    cheapUpgradeCost=new Decimal(1e30);
    cheapUpgrade=new Decimal(0);
    exponentExponent=new Decimal(1);
    exponentExponentCost=new Decimal(3.5e10);
     
    })
    $("#ENDGAME").click(function() {
      if(matter.gte("ee20")) {
        fadeTo("div", "#endscreen", 5000);
        end=true;
      }
      setTimeout(function() {
        $("#h1end").fadeIn(2000);
        setTimeout(function() {
          $("#pend").fadeIn(400);
        }, 2000)
      }, 10000)
    })
    $("#cheapUpgrade").click(function() {
      if(matter.gte(cheapUpgradeCost)) {
        cheapUpgrade=cheapUpgrade.add(1);
        matter.sub(cheapUpgradeCost);
        cheapUpgradeCost=cheapUpgradeCost.pow(1.1)
      }
    })
    function fadeIn(element, time) {
      $(element).fadeIn(time)
    }
    function fadeTo(element, element2, time) {
        $(element).fadeOut(time);
      setTimeout(function() {
    $(element2).fadeIn(time);
      }, time);
    }
    function buttonFadeTo(button, element, element2, time) {
      $(button).click(function() {
        fadeTo(element, element2, time)
      })
    }
    $("#export").click(function() {
    document.getElementById("exporttext").value=btoa(JSON.stringify([matter, maxMatter, clickamount, upgradecost, clickmulti, upgrade2cost, exponent, upgrade3cost, firstTierRebirths, autoexpand, hidden, exponentExponent, exponentExponentCost, cheapUpgrade, cheapUpgradeCost]));
    });
    $("#import").click(function() {
    try {
      var tarray=JSON.parse(atob(prompt("what save code")))
      matter=new Decimal(tarray[0]);
      maxMatter=new Decimal(tarray[1]);
      clickamount=new Decimal(tarray[2]);
      upgradecost=new Decimal(tarray[3]);
      clickmulti=new Decimal(tarray[4]);
      upgrade2cost=new Decimal(tarray[5]);
      exponent=new Decimal(tarray[6]);
      upgrade3cost=new Decimal(tarray[7]);
      firstTierRebirths=new Decimal(tarray[8]);
      autoexpand=tarray[9];
      hidden=tarray[10];
      exponentExponent=new Decimal(tarray[11]);
      exponentExponentCost=new Decimal(tarray[12]);
      if(typeof tarray[13]!=='Undefined'&&typeof tarray[14]!=='Undefined') {
        cheapUpgrade=new Decimal(tarray[13]);
        cheapUpgradeCost=new Decimal(tarray[14])
      }
      if(!hidden[0]) {
        $("#upgrade").fadeIn(2000);
      }
      if(!hidden[1]) {
        $("#upgrade2").fadeIn(2000);
      }
      if(!hidden[2]) {
        $("#upgrade3").fadeIn(2000);
      }
      if(!hidden[3]) {
        $("#upgrade4").fadeIn(2000);
      }
    } catch(err) {
      alert("you are bad at editing 💀")
    } 
    })
    function reset() {
     let one=new Decimal(1);
     hidden=[true, true, true, true];
     $("#upgrade").fadeOut(2000);
     $("#upgrade2").fadeOut(2000);
     $("#upgrade3").fadeOut(2000);
     $("#upgrade4").fadeOut(2000);
     let ten=new Decimal(10);
     if(resetFULL) {
     exponentExponent=new Decimal(1);
     exponentExponentCost=new Decimal(2e10);
     cheapUpgradeCost=new Decimal(1e30);
     cheapUpgrade=new Decimal(0);
     }
     firstTierRebirths=firstTierRebirths.add(1);
     matter=new Decimal(0);
     maxMatter=new Decimal(ten.pow(firstTierRebirths.add(1)));
     clickamount=new Decimal(1);
     upgradecost=new Decimal(10);
     clickmulti=new Decimal(1);
     upgrade2cost=new Decimal(100);
     exponent=new Decimal(one.add(firstTierRebirths.mul(0.5)));
     upgrade3cost=new Decimal(4000);
     autoexpand=false;
     $("#expand").fadeIn(2000);
    }
    $("#getMatter").click(function() {
      matter=(matter.add((clickamount.pow(exponent.pow(exponentExponent))).mul(clickmulti))).round();
      if(matter.gt(maxMatter)) {
        matter=maxMatter;
      }
    })
    $("#expand").click(function() {
      if(matter.equals(maxMatter)) {
        matter=new Decimal(0);
        maxMatter=maxMatter.mul(3).round();
      }
    if(maxMatter.gt(100000)) {
      autoexpand=true;
      $("#expand").fadeOut(2000);
    }
    })
    $("#upgrade").click(function() {
      for(let i=0; i<10; i++) {
      if(matter.gte(upgradecost.pow(cheapUpgradeFactor.pow(cheapUpgrade)))) {
      multiBuy=new Decimal(1);
      while(matter.gte((eulernum.pow(exponentforupg1.mul(multiBuy)).mul(5).sub(5)).mul(upgradecost.pow(cheapUpgradeFactor.pow(cheapUpgrade))).round())) {
        multiBuy=multiBuy.mul(1.2);
      }
      multiBuy=multiBuy.mul(1/1.2).floor();
        matter=matter.sub((eulernum.pow(exponentforupg1.mul(multiBuy)).mul(5).sub(5)).mul(upgradecost.pow(cheapUpgradeFactor.pow(cheapUpgrade))).round())
        clickamount=clickamount.add(multiBuy);
        let temp=new Decimal(1.2);
        upgradecost=upgradecost.mul(temp.pow(multiBuy)).round()
      }
      }
    })
    $("#upgrade2").click(function() {
      for(let i=0; i<10; i++) {
      if(matter.gte(upgrade2cost.pow(cheapUpgradeFactor.pow(cheapUpgrade)))) {
      multiBuy=new Decimal(1);
      while(matter.gte((eulernum.pow(exponentforupg2.mul(multiBuy)).mul(10/3).sub(10/3)).mul(upgrade2cost.pow(cheapUpgradeFactor.pow(cheapUpgrade))).round())) {
        multiBuy=multiBuy.mul(2);
      }
      multiBuy=multiBuy.mul(0.5);
        matter=matter.sub((eulernum.pow(exponentforupg2.mul(multiBuy)).mul(10/3).sub(10/3)).mul(upgrade2cost.pow(cheapUpgradeFactor.pow(cheapUpgrade))).round())
        clickmulti=clickmulti.add(multiBuy);
        let temp=new Decimal(1.3);
        upgrade2cost=upgrade2cost.mul(temp.pow(multiBuy)).round()
      }
      }
    })
    $("#upgrade3").click(function() {
      if(matter.gte(upgrade3cost.pow(cheapUpgradeFactor.pow(cheapUpgrade)))) {
        matter=matter.sub(upgrade3cost.pow(cheapUpgradeFactor.pow(cheapUpgrade)));
        exponent=exponent.add(0.1);
        let tempvar=new Decimal(1.2);
        upgrade3cost=tempvar.pow(upgrade3cost.mul(1/2000).add(1)).mul(4000).round()
      }
    })
    $("#upgrade4").click(function() {
    if(upgrade3cost.gte(1e100)) {
      reset();
    }
    })
    $("#exponentsExponent").click(function() {
      if(matter.gte(exponentExponentCost.pow(cheapUpgradeFactor.pow(cheapUpgrade)))) {
        matter.sub(exponentExponentCost);
        exponentExponent=exponentExponent.mul(1.2);
        exponentExponentCost=exponentExponentCost.pow((exponentExponentCost.log10()).mul(0.1))
      }
    })
    $("#moreUpgradesButton").click(function() {
    fadeTo("#start", "#moreUpgrade", 1000);
    })
    $("#return2").click(function() {
      if(end==false) {
      fadeTo("#moreUpgrade", "#start", 1100);
      }
    }) 
    $("#optionbutton").click(function() {
      fadeTo("#start", "#options", 1000);
    });
    $("#return").click(function() {
      fadeTo("#options", "#start", 1000);
    })
    $("#reset").click(function() {
      resetFULL=true;
      firstTierRebirths=new Decimal(-1);
      reset()
      resetFULL=false;
    })
    // html editing
      setTimeout(fadeIn.bind($, "#mainbutton", 2000), 1500);
    
    $("#mainbutton").click(function() {
      $("#startscreen").fadeOut(2000);
      setTimeout(fadeIn.bind($, "#start", 2000), 2000);
    })
    function update() {
    $("#currMatter").text(matter);
    $("#maxMatter").text(maxMatter);
    $("#upgradecost").text(upgradecost.pow(cheapUpgradeFactor.pow(cheapUpgrade)));
    $("#upgrade2cost").text(upgrade2cost.pow(cheapUpgradeFactor.pow(cheapUpgrade)));
    $("#upgrade3cost").text(upgrade3cost.pow(cheapUpgradeFactor.pow(cheapUpgrade)));
    $("#dblExponentCost").text(exponentExponentCost.pow(cheapUpgradeFactor.pow(cheapUpgrade)));
    $("#CheapUpgradeCost").text(cheapUpgradeCost);
    if(matter.gte(upgradecost.pow(cheapUpgradeFactor.pow(cheapUpgrade)))&&hidden[0]) {
      hidden[0]=false;
      $("#upgrade").fadeIn(2000);
    }
    if(matter.gte(upgrade2cost)&&hidden[1]) {
      hidden[1]=false;
      $("#upgrade2").fadeIn(2000);
    }
    if(matter.gte(upgrade3cost)&&hidden[2]&&upgrade3cost.lt(1e100)) {
      hidden[2]=false;
      $("#upgrade3").fadeIn(2000);
    }
    if(upgrade3cost.gt(1e100)) {
      hidden[2]=true;
      hidden[3]=false;
      $("#upgrade3").fadeOut(2000);
      $("#upgrade4").fadeIn(2000);
    }
    if(autoexpand) {
      if(matter.equals(maxMatter)) {
        matter=new Decimal(0);
        maxMatter=maxMatter.mul(maxMatter.pow(0.05)).round();
      }
    }
      requestAnimationFrame(update);
    }
      requestAnimationFrame(update);
    
    // saving/loading
    function updateUIWithData(data) {
        if (data) {
            matter=new Decimal(data[0]);
            maxMatter=new Decimal(data[1]);
            clickamount=new Decimal(data[2]);
            upgradecost=new Decimal(data[3]);
            clickmulti=new Decimal(data[4]);
            upgrade2cost=new Decimal(data[5]);
            exponent=new Decimal(data[6]);
            upgrade3cost=new Decimal(data[7]);
            firstTierRebirths=new Decimal(data[8]);
            autoexpand=data[9];
            hidden=data[10];
            exponentExponent=new Decimal(data[11]);
            exponentExponentCost=new Decimal(data[12]);
      if(typeof data[13]!=='Undefined'&&typeof data[14]!=='Undefined') {
        cheapUpgrade=new Decimal(data[13]);
        cheapUpgradeCost=new Decimal(data[14])
      }
      if(!hidden[0]) {
        $("#upgrade").fadeIn(2000);
      }
      if(!hidden[1]) {
        $("#upgrade2").fadeIn(2000);
      }
      if(!hidden[2]) {
        $("#upgrade3").fadeIn(2000);
      }
      if(!hidden[3]) {
        $("#upgrade4").fadeIn(2000);
      }
        }
    }

    // Function to initialize IndexedDB
function initializeIndexedDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open("yourGameDatabase", 1);

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            const objectStore = db.createObjectStore("gameData", { keyPath: "id" });
            objectStore.createIndex("id", "id", { unique: true });
        };

        request.onsuccess = (event) => {
            resolve(event.target.result);
        };

        request.onerror = (event) => {
            reject(event.error);
        };
    });
}

// Function to save data to IndexedDB
async function saveDataToIndexedDB(data) {
    const db = await initializeIndexedDB();

    return new Promise((resolve, reject) => {
        const transaction = db.transaction(["gameData"], "readwrite");
        const objectStore = transaction.objectStore("gameData");
        const request = objectStore.put({ id: "yourDataKey", data: data });

        request.onsuccess = () => {
            resolve();
        };

        request.onerror = (event) => {
            reject(event.error);
        };
    });
}

// Function to load data from IndexedDB
async function loadDataFromIndexedDB() {
    const db = await initializeIndexedDB();

    return new Promise((resolve, reject) => {
        const transaction = db.transaction(["gameData"], "readonly");
        const objectStore = transaction.objectStore("gameData");
        const request = objectStore.get("yourDataKey");

        request.onsuccess = (event) => {
            const result = event.target.result;

            if (result) {
                resolve(result.data);
            } else {
                resolve(null);
            }
        };

        request.onerror = (event) => {
            reject(event.error);
        };
    });
}

// Function to save game data every 5 seconds
setInterval(async function () {
    try {
        await saveDataToIndexedDB([
            matter.toString(),
            maxMatter.toString(),
            clickamount.toString(),
            upgradecost.toString(),
            clickmulti.toString(),
            upgrade2cost.toString(),
            exponent.toString(),
            upgrade3cost.toString(),
            firstTierRebirths.toString(),
            autoexpand,
            hidden,
            exponentExponent.toString(),
            exponentExponentCost.toString(),
            cheapUpgrade.toString(),
            cheapUpgradeCost.toString()
        ]);
    } catch (error) {
        console.error("Error saving data to IndexedDB:", error);
    }
}, 5000);


// Function to load game data
async function loadGame() {
    try {
        const loadedData = await loadDataFromIndexedDB();
        updateUIWithData(loadedData);
    } catch (error) {
        console.error("Error loading data from IndexedDB:", error);
    }
}

// Call loadGame() to initiate the loading process
loadGame();

    
    })