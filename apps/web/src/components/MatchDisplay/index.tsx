import { ReactNode } from 'react';

interface MatchDisplayProps {
  value: string;
  cases: Record<string, ReactNode>;
}

export default function MatchDisplay({ value, cases }: MatchDisplayProps) {
  const keys = Object.keys(cases);

  return (
    <div>
      {keys.map((key, idx) => {
        return (
          <div key={`${key}-${idx}`} className={value !== key ? 'hidden' : ''}>
            {cases[key]}
          </div>
        );
      })}
    </div>
  );
}
