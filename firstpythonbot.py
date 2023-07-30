# we want to lean how to make a bot patrick is starting with 
#flash loans, but i wanne find asshats

from typing import List

from forta_agent import transaction_event


AAVE_V3_ADDRESS="0x1d646c4045189991fdfd24a66b192a294158b839a6ec121d740474bdacb3ab23"



def handle_transaction(
        transaction_event: transaction_event.Transaction_event,
        ) -> List[transaction_event.TransactionEvent]:
    
    findings: List[transaction_event.TransactionEvent] = []
    addresses_lowered = [key.lower() in transaction_event.addresses.keys()]

    if AAVE_V3_ADDRESS not in transaction_event.address:
        return findings
    
    return findings



   
   

   
   
   

   
   
   
   
   
   
   

   
   
   

   

   
   
   
   
   
   
   
   

   










