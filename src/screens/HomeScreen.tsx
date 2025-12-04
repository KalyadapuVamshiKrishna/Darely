import React, { useEffect, useState } from 'react';
import { FlatList, RefreshControl, View, StatusBar } from 'react-native';
import { Spinner, YStack, Text } from 'tamagui';
import { ChallengeCard } from '../components/ChallengeCard';
import { fetchChallenges } from '../services/api';
import { Challenge } from '../data/types';
import { useNavigation } from '@react-navigation/native';
import { useThemeColors } from '../hooks/useThemeColors';

export const HomeScreen = () => {
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation<any>();
  const { colors, isDark } = useThemeColors();

  const loadData = async () => {
    const data = await fetchChallenges();
    setChallenges(data);
    setLoading(false);
    setRefreshing(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    loadData();
  };

  if (loading && !refreshing) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background }}>
        <Spinner size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.background, paddingHorizontal: 16 }}>
      {/* Dynamic Status Bar for Light/Dark mode */}
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} backgroundColor={colors.background} />
      
      <YStack paddingTop="$4" paddingBottom="$4">
        <Text fontSize="$8" fontWeight="800" color={colors.text} marginBottom="$4">
          Daily Goals 🎯
        </Text>
      </YStack>

      <FlatList
        data={challenges}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ChallengeCard 
            item={item} 
            onPress={() => navigation.navigate('Details', { challenge: item })} 
          />
        )}
        refreshControl={
          <RefreshControl 
            refreshing={refreshing} 
            onRefresh={handleRefresh} 
            tintColor={colors.text} // Loading spinner color
          />
        }
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};