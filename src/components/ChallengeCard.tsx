import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native'; // Standard RN components for layout
import { Text, XStack } from 'tamagui';
import { Challenge } from '../data/types';
import { useThemeColors } from '../hooks/useThemeColors';

interface Props {
  item: Challenge;
  onPress: () => void;
}

export const ChallengeCard = ({ item, onPress }: Props) => {
  const { colors, isDark } = useThemeColors();

  // "Chip" style logic: Returns { bg, text } based on difficulty
  const getBadgeStyle = (diff: string) => {
    switch(diff) {
      case 'Easy': 
        return { bg: isDark ? '#1B3320' : '#DCFCE7', text: isDark ? '#4ADE80' : '#166534' }; // Soft Green
      case 'Medium': 
        return { bg: isDark ? '#451A03' : '#FFEDD5', text: isDark ? '#FDBA74' : '#9A3412' }; // Soft Orange
      case 'Hard': 
        return { bg: isDark ? '#450A0A' : '#FEE2E2', text: isDark ? '#F87171' : '#991B1B' }; // Soft Red
      default: 
        return { bg: '#E0F2FE', text: '#075985' };
    }
  };

  const badge = getBadgeStyle(item.difficulty);

  return (
    <Pressable 
      onPress={onPress}
      style={({ pressed }) => [
        styles.cardContainer, 
        { 
          backgroundColor: colors.cardBg,
          borderColor: colors.border,
          transform: [{ scale: pressed ? 0.98 : 1 }] // Subtle press animation
        }
      ]}
    >
      <View style={styles.header}>
        <Text 
          fontSize={18} 
          fontWeight="700" 
          width="65%" 
          color={colors.text} 
          numberOfLines={1}
        >
          {item.title}
        </Text>
        
        {/* The "Chip" Badge */}
        <View style={[styles.badge, { backgroundColor: badge.bg }]}>
          <Text fontSize={12} fontWeight="700" color={badge.text}>
            {item.difficulty}
          </Text>
        </View>
      </View>

      <Text 
        fontSize={12} 
        color={colors.primary} 
        fontWeight="600" 
        textTransform="uppercase" 
        marginBottom={8}
      >
        {item.category}
      </Text>
      
      <Text 
        fontSize={14} 
        lineHeight={20} 
        color={colors.subText} 
        numberOfLines={2}
      >
        {item.description}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    // Elevation / Shadows
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  }
});