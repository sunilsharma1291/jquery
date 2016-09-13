$(function(){
	
	var formDataObj, singleEntry, datArr = [], counter=0;
	
	// Reusable Code

	// containsObject: function to check if an object exist in an array
	function containsObject(obj, list) {
	    var i;

	    for (i = 0; i < list.length; i++) {
	        if (JSON.stringify(list[i]) === JSON.stringify(obj)) {
	            return true;
	        }
         }

    return false;
    }
	
	// getFormData: function to get the form data 
	function getFormData(){
		var formDataObj = {
			input1 : $("#txt1").val() || 0,
			input2 : $("#txt2").val() || 0,
			select1 : $("#txt5").val() || 0,
			select2 : $("#txt6").val() || 0
		}

			//console.log(formDataObj, datArr);
			var ifExists = containsObject(formDataObj, datArr);
			
			if(!ifExists){
				datArr.push(formDataObj);
				insertFormDataInOutput(formDataObj);
				return datArr;	
		     }
		     return false;
			
	}

	// resetForm: function to reset form
	function resetForm(){
		$("#txt1").val('');
		$("#txt2").val('');
	}

	// insertFormDataInOutput: function to fill the form data to output tree
	function insertFormDataInOutput(singleEntry){
		//console.log(singleEntry)
		counter++;
		var setHtml = '<section class="demo" id="'+counter+'"> <h2 class="h2">'+singleEntry.input1+'</h2> <ul class="ul"> <li><a href="#">'+singleEntry.input2+'</a></li> </ul> <h3 class="h3">'+singleEntry.select1+'</h3><h4 class="h4">'+singleEntry.select2+'</h4> </section>';
		
		$('#output').append(setHtml);
		
		var selector='section#'+counter+' ul li a';
		
		$(selector).on('click', function(){alert(1)
			//console.log('output onclick');

			var $this = $(this),
				secID = $this.parents('section.demo'),
				sectionH2 = secID.find('.h2'),
				sectionH3 =  secID.find('.h3'),
				sectionH4 =  secID.find('.h4')
			;

			var sectionData = {
				input1 : sectionH2.text(),
				input2 : $this.text(),
				select1 : sectionH3.text(),
				select2 : sectionH4.text(),
			}
			fillForm(sectionData);
		});
	}

	// EditForm: function show data in edit mode in form
	function fillForm(editDataObj){
	    var inputFields = [$("#txt1"), $("#txt2"), $("#txt5"), $("#txt6")],
		    editDataObjKeys = Object.keys(editDataObj);

        for(var i=0; i< editDataObjKeys.length; i++){
        	//console.log(inputFields[i], editDataObjKeys[i]);
        	inputFields[i].val(editDataObj[editDataObjKeys[i]]);
        }
	}


	//handlers
	$('#btn1').on('click', function(){

		var dataRecievedFromForm = getFormData();
		//console.log('onclick')
		if(dataRecievedFromForm){
			//console.log(dataRecievedFromForm)
			resetForm(); //clear Form	
		}
	});
	
});
