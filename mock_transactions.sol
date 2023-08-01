from unittest.mock import mock 

from forta_agent import create_transaction_event

from forta_agent import handle_transaction

from forta_agent.transaction_event import TransactionEvent

mock_tx_event: transaction_event = create_transaction_event(
    {"transaction": {"hash": "0x1234"}, "addresses": {"0x1432: True"}}
)

 

mock_tx_event.filter_log = Mock()

class TestFlashLoanDetector:
    def test_returns_empty_if_no_aave_contract(self):
        findings: List[TransactionEvent] = handle_transaction(mock_tx_event)
        assert len(findings) ==0
