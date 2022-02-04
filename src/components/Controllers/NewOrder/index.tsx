import React, { useRef } from 'react';
import { BottomSheetView, BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';

import { Background } from './styles';
import { Button } from '@components/Controllers/Button';
import { OrderForm } from '@components/Forms/OrderForm';
import { KeyboardAvoidingView, ScrollView } from 'react-native';

export function NewOrder() {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  function handleSnapPress() {
    bottomSheetRef.current?.present();
  }

  return (
    <>
      <Button title="Novo chamado" onPress={handleSnapPress} />

      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetRef}
          snapPoints={['50%']}
          style={{ padding: 24 }}
          enablePanDownToClose={true}
          backdropComponent={() => <Background />}
        >
          <BottomSheetView>
            <ScrollView contentContainerStyle={{ paddingBottom: 10}}>
              <KeyboardAvoidingView 
                style={{ flex: 1 }}
                behavior="position"
              >
                <OrderForm /> 
              </KeyboardAvoidingView>
            </ScrollView>
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </>
  );
}