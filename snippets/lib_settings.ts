import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "daily_calorie_goal";

export async function setDailyGoal(goal: number) {
  await AsyncStorage.setItem(KEY, String(goal));
}

export async function getDailyGoal(): Promise<number> {
  const value = await AsyncStorage.getItem(KEY);
  return value ? parseInt(value, 10) : 2000; // default
}
