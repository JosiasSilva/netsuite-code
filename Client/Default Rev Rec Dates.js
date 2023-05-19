
// Global Variables
{
	var debugFieldChange = false ;
}

function setRevRecDate(type,name)
{
	if(type == 'item')
	{  
		
		if(name == 'item')
		{
			
			var stRevRecStartDate = nlapiGetCurrentLineItemValue('item','custcol_item_rev_rec_start');
			var stRevRecEndDate = nlapiGetCurrentLineItemValue('item','custcol_item_rev_rec_end');
			
			nlapiSetCurrentLineItemValue('item', 'revrecstartdate',stRevRecStartDate);
			nlapiSetCurrentLineItemValue('item', 'revrecenddate',stRevRecEndDate);
		}
          }
	   return true;
}