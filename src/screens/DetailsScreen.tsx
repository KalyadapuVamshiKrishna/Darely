import React from 'react';
import { Alert } from 'react-native';
import { YStack, Text, Button, XStack, ScrollView, Separator } from 'tamagui';
import { useRoute } from '@react-navigation/native';
import { Challenge } from '../data/types';
import { useThemeColors } from '../hooks/useThemeColors'; // Import the hook

export const DetailsScreen = () => {
  const { colors } = useThemeColors(); // Get colors
  const route = useRoute<any>();
  const { challenge } = route.params as { challenge: Challenge };



  const handleAccept = () => {
    Alert.alert("🚀 Challenge Accepted!", `You have committed to: ${challenge.title}\n\nGo make it happen!`);
  };

  return (
   <ScrollView backgroundColor={colors.background} contentContainerStyle={{ flexGrow: 1, padding: 20 }}>
      <YStack space="$4">
        
        {/* Header */}
        <YStack space="$2">
            <Text fontSize="$9" fontWeight="800" color={colors.text}>{challenge.title}</Text>
            <XStack space="$3">
                <Button size="$2" theme="active" disabled borderRadius="$4">{challenge.category}</Button>
                <Button size="$2" variant="outlined" disabled borderRadius="$4">{challenge.difficulty}</Button>
            </XStack>
        </YStack>

        <Separator marginVertical="$2" borderColor={colors.border} />

        {/* Content */}
        <YStack space="$2">
             <Text fontSize="$5" fontWeight="600" color={colors.subText}>Challenge Details:</Text>
             <Text fontSize="$5" lineHeight="$8" color={colors.text}>{challenge.fullDescription}</Text>
        </YStack>

        {/* Action Button */}
        <YStack marginTop="$6">
            <Button 
                themeInverse 
                size="$6" 
                onPress={handleAccept}
                pressStyle={{ opacity: 0.8, scale: 0.98 }}
                animation="bouncy"
            >
                Accept Challenge
            </Button>
        </YStack>

      </YStack>
    </ScrollView>
  );
};