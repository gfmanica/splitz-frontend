import { Screen } from '@/components/ui/screen';
import { MainBlock } from '@/components/ride/form/main-block';
import { SaveBlock } from '@/components/ride/form/save-block';

export default function RideFormScreen() {
    return (
        <Screen>
            <MainBlock />

            <SaveBlock />
        </Screen>
    );
}
