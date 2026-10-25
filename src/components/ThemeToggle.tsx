// "use client";

// import { useTheme, type Theme } from "@/components/ThemeProvider";

// const themes: { value: Theme; label: string }[] = [
//   { value: "day", label: "Day" },
//   { value: "dark", label: "Dark" },
//   { value: "system", label: "System" },
// ];

// export default function ThemeToggle() {
//   const { theme, setTheme } = useTheme();

//   return (
//     <div
//       className="relative z-50 inline-flex shrink-0 items-center gap-0.5 rounded-full border border-slate-200 bg-white p-1 text-xs shadow-sm sm:gap-1 sm:text-sm"
//       role="group"
//       aria-label="Choose website appearance"
//     >
//       {themes.map((option) => {
//         const isSelected = theme === option.value;

//         return (
//           <button
//             key={option.value}
//             type="button"
//             onClick={() => setTheme(option.value)}
//             aria-pressed={isSelected}
//             className={`relative z-10 touch-manipulation select-none rounded-full px-3 py-2 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
//               isSelected
//                 ? "bg-slate-900 text-white shadow-sm"
//                 : "text-slate-600 hover:bg-slate-100"
//             }`}
//           >
//             {option.label}
//           </button>
//         );
//       })}
//     </div>
//   );
// }