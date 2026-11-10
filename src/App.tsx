import React, { useState, useEffect } from 'react';
import { POS_DATA, INITIAL_LEADERBOARD } from './data/posData';
import { PosItem, SantriProfile, LeaderboardEntry } from './types';
import { Header } from './components/Header';
import { TopBar } from './components/TopBar';
import { AdventureMap } from './components/AdventureMap';
import { PosModal } from './components/PosModal';
import { ExamModal } from './components/ExamModal';
import { CertificateModal } from './components/CertificateModal';
import { DoaCollectionModal } from './components/DoaCollectionModal';
import { LeaderboardModal } from './components/LeaderboardModal';
import { TeacherModeModal } from './components/TeacherModeModal';
import { Footer } from './components/Footer';

const STORAGE_KEY_PROFILE = 'dtu_adab_santri_profile_v1';
const STORAGE_KEY_LEADERBOARD = 'dtu_adab_santri_leaderboard_v1';

export default function App() {
  // Load or initialize Santri Profile from localStorage
  const [profile, setProfile] = useState<SantriProfile>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PROFILE);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return {
      name: 'Santri Hebat',
      completedPos: [],
      stars: 0,
      selectedAvatar: 'boy',
      homeworkPos: [2, 3, 5, 8, 9],
      examScore: null,
      hasSultanCertificate: false,
      certificateDate: null,
      soundEnabled: true,
    };
  });

  // Load or initialize Leaderboard from localStorage
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_LEADERBOARD);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return INITIAL_LEADERBOARD;
  });

  // Active Modals
  const [activePos, setActivePos] = useState<PosItem | null>(null);
  const [isExamOpen, setIsExamOpen] = useState(false);
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);
  const [isDoaCollectionOpen, setIsDoaCollectionOpen] = useState(false);
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
  const [isTeacherModeOpen, setIsTeacherModeOpen] = useState(false);

  // Save profile to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_PROFILE, JSON.stringify(profile));
    } catch (err) {
      console.warn('Failed to save profile to localStorage:', err);
    }
  }, [profile]);

  // Save leaderboard to localStorage and keep current student in sync
  useEffect(() => {
    try {
      // Update or insert current student in the leaderboard
      const updatedList = [...leaderboard];
      const existingIdx = updatedList.findIndex(
        (item) => item.isCurrentUser || item.name.toLowerCase() === profile.name.toLowerCase()
      );

      const studentEntry: LeaderboardEntry = {
        id: 'current-user-entry',
        name: profile.name || 'Santri Hebat',
        stars: profile.stars,
        isSultan: profile.hasSultanCertificate,
        avatar: profile.selectedAvatar,
        date: 'Hari ini',
        isCurrentUser: true,
      };

      if (existingIdx !== -1) {
        updatedList[existingIdx] = studentEntry;
      } else {
        updatedList.push(studentEntry);
      }

      // Sort by stars descending
      updatedList.sort((a, b) => b.stars - a.stars);
      localStorage.setItem(STORAGE_KEY_LEADERBOARD, JSON.stringify(updatedList));
      setLeaderboard(updatedList);
    } catch (err) {
      console.warn('Failed to update leaderboard:', err);
    }
  }, [profile.stars, profile.name, profile.hasSultanCertificate, profile.selectedAvatar]);

  // Determine current active pos (the first incomplete pos in order)
  const currentActivePosId = (() => {
    for (let i = 1; i <= 10; i++) {
      if (!profile.completedPos.includes(i)) {
        return i;
      }
    }
    return 10; // All done
  })();

  // Handle clicking a pos on the map
  const handleSelectPos = (pos: PosItem) => {
    if (pos.id === 10) {
      // Pos 10 is the Sultan Adab Comprehensive Exam
      setIsExamOpen(true);
    } else {
      setActivePos(pos);
    }
  };

  // Complete a standard Pos (1 - 9)
  const handleCompletePos = (posId: number) => {
    setProfile((prev) => {
      if (prev.completedPos.includes(posId)) {
        return prev;
      }
      const newCompleted = [...prev.completedPos, posId];
      return {
        ...prev,
        completedPos: newCompleted,
        stars: newCompleted.length,
      };
    });
  };

  // Pass Exam (Pos 10)
  const handlePassExam = (score: number) => {
    const today = new Date().toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    setProfile((prev) => {
      const newCompleted = prev.completedPos.includes(10)
        ? prev.completedPos
        : [...prev.completedPos, 10];

      return {
        ...prev,
        completedPos: newCompleted,
        stars: newCompleted.length,
        examScore: score,
        hasSultanCertificate: true,
        certificateDate: today,
      };
    });
  };

  // Sound toggle
  const handleToggleSound = () => {
    setProfile((prev) => ({
      ...prev,
      soundEnabled: !prev.soundEnabled,
    }));
  };

  // Name update
  const handleUpdateName = (newName: string) => {
    setProfile((prev) => ({
      ...prev,
      name: newName,
    }));
  };

  // Avatar toggle (Boy / Girl)
  const handleToggleAvatar = () => {
    setProfile((prev) => ({
      ...prev,
      selectedAvatar: prev.selectedAvatar === 'boy' ? 'girl' : 'boy',
    }));
  };

  // Teacher reset progress
  const handleResetProgress = () => {
    setProfile((prev) => ({
      ...prev,
      completedPos: [],
      stars: 0,
      examScore: null,
      hasSultanCertificate: false,
      certificateDate: null,
    }));
  };

  // Teacher update homework pos
  const handleUpdateHomeworkPos = (selectedIds: number[]) => {
    setProfile((prev) => ({
      ...prev,
      homeworkPos: selectedIds,
    }));
  };

  return (
    <div className="min-h-screen bg-sky-100 flex flex-col justify-between font-sans selection:bg-amber-300 select-none">
      {/* Top Application Header */}
      <Header
        soundEnabled={profile.soundEnabled}
        onToggleSound={handleToggleSound}
        onOpenTeacherMode={() => setIsTeacherModeOpen(true)}
      />

      {/* Santri Info Top Bar */}
      <TopBar
        studentName={profile.name}
        onUpdateName={handleUpdateName}
        stars={profile.stars}
        totalPos={POS_DATA.length}
        selectedAvatar={profile.selectedAvatar}
        onToggleAvatar={handleToggleAvatar}
        onOpenDoaCollection={() => setIsDoaCollectionOpen(true)}
        onOpenLeaderboard={() => setIsLeaderboardOpen(true)}
      />

      {/* Main Interactive Adventure Map */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-2 sm:px-4 py-2">
        <AdventureMap
          posList={POS_DATA}
          completedPos={profile.completedPos}
          currentActivePos={currentActivePosId}
          homeworkPos={profile.homeworkPos}
          selectedAvatar={profile.selectedAvatar}
          onSelectPos={handleSelectPos}
          starsCount={profile.stars}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* MODAL 1: Pos 1 - 9 Modal (Pertanyaan Adab, 3 Pilihan Bergambar, Confetti, Kartu Doa) */}
      {activePos && (
        <PosModal
          pos={activePos}
          onClose={() => setActivePos(null)}
          onCompletePos={handleCompletePos}
          isAlreadyCompleted={profile.completedPos.includes(activePos.id)}
          soundEnabled={profile.soundEnabled}
        />
      )}

      {/* MODAL 2: Pos 10 Ujian Sultan Adab */}
      {isExamOpen && (
        <ExamModal
          studentName={profile.name}
          onClose={() => setIsExamOpen(false)}
          onPassExam={handlePassExam}
          onOpenCertificate={() => {
            setIsExamOpen(false);
            setIsCertificateOpen(true);
          }}
          hasPassedBefore={profile.hasSultanCertificate}
          savedScore={profile.examScore}
          soundEnabled={profile.soundEnabled}
        />
      )}

      {/* MODAL 3: Sertifikat Digital Sultan Adab */}
      {isCertificateOpen && (
        <CertificateModal
          studentName={profile.name}
          score={profile.examScore || 100}
          date={profile.certificateDate || '10 November 2026'}
          onClose={() => setIsCertificateOpen(false)}
        />
      )}

      {/* MODAL 4: Halaman Koleksi Doa */}
      {isDoaCollectionOpen && (
        <DoaCollectionModal
          posList={POS_DATA}
          completedPos={profile.completedPos}
          soundEnabled={profile.soundEnabled}
          onClose={() => setIsDoaCollectionOpen(false)}
        />
      )}

      {/* MODAL 5: Halaman Peringkat Kelas */}
      {isLeaderboardOpen && (
        <LeaderboardModal
          leaderboard={leaderboard}
          studentName={profile.name}
          onClose={() => setIsLeaderboardOpen(false)}
        />
      )}

      {/* MODAL 6: Mode Guru (Password: guru123) */}
      {isTeacherModeOpen && (
        <TeacherModeModal
          posList={POS_DATA}
          santriProfile={profile}
          onResetProgress={handleResetProgress}
          onUpdateHomeworkPos={handleUpdateHomeworkPos}
          onClose={() => setIsTeacherModeOpen(false)}
        />
      )}
    </div>
  );
}
