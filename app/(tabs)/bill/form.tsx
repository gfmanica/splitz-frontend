import { Screen } from '@/components/ui/screen';
import { MainBlock } from '@/components/bill/form/main-block';
import { PersonBlock } from '@/components/bill/form/person-block';

export default function BillFormScreen() {
    return (
        <Screen>
            <MainBlock />

            <PersonBlock />
        </Screen>
    );
}
