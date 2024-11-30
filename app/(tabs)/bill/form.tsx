import { Screen } from '@/components/ui/screen';
import { MainBlock } from '@/components/bill/form/main-block';
import { PersonBlock } from '@/components/bill/form/person-block';
import { SaveBlock } from '@/components/bill/form/save-block';

export default function BillFormScreen() {
    return (
        <Screen>
            <MainBlock />

            <PersonBlock />

            <SaveBlock />
        </Screen>
    );
}
