import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Colors } from './src/constants/theme';
import { Config } from './src/constants/config';

export default function App() {
  const currentTheme = Colors.dark;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: currentTheme.background }]}>
      <StatusBar style="light" />
      <View style={styles.content}>
        <Text style={[styles.badge, { color: currentTheme.primary }]}>
          {Config.academicInfo.uc} — ProjectReact (M2)
        </Text>
        
        <Text style={[styles.title, { color: currentTheme.textPrimary }]}>
          🎬 {Config.appName}
        </Text>
        
        <Text style={[styles.subtitle, { color: currentTheme.textSecondary }]}>
          Aplicação Multiplataforma de Gestão Cinematográfica
        </Text>

        <View style={[styles.card, { backgroundColor: currentTheme.surface, borderColor: currentTheme.border }]}>
          <Text style={[styles.cardHeader, { color: currentTheme.secondary }]}>
            Equipa — Turma {Config.academicInfo.classGroup}
          </Text>
          {Config.academicInfo.authors.map((author) => (
            <Text key={author.studentNumber} style={[styles.member, { color: currentTheme.textPrimary }]}>
              • {author.name} ({author.studentNumber})
            </Text>
          ))}
        </View>

        <View style={styles.statusBox}>
          <Text style={[styles.statusIcon, { color: currentTheme.success }]}>✓</Text>
          <Text style={[styles.statusText, { color: currentTheme.textSecondary }]}>
            Ambiente Expo & TypeScript inicializado com arquitetura MVC
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  badge: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 28,
  },
  card: {
    padding: 20,
    borderRadius: 14,
    width: '100%',
    maxWidth: 360,
    borderWidth: 1,
    marginBottom: 24,
  },
  cardHeader: {
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  member: {
    fontSize: 15,
    lineHeight: 24,
  },
  statusBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  statusIcon: {
    fontSize: 16,
    fontWeight: '700',
    marginRight: 8,
  },
  statusText: {
    fontSize: 13,
    textAlign: 'center',
  },
});
