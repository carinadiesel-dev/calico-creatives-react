import React from 'react'

type ProgressBarProps = {
  progress: number
  settings?: {
    barColor?: string
    backgroundColor?: string
  }
}

const _defaultSettings: ProgressBarProps['settings'] = {
  barColor: "#f87171",
  backgroundColor: "#EBEBEB"
}

export const ProgressBar = ({ progress, settings = _defaultSettings }: ProgressBarProps) => {
  settings = Object.assign({}, _defaultSettings, settings);
  return <div className="flex items-center gap-2">
    <span className="text-sm font-semibold">{Math.round(progress * 100)}%</span>
    <div className="flex-1 rounded-lg h-4 overflow-hidden" style={{ backgroundColor: settings.backgroundColor }}>
      <div className="h-full rounded-lg" style={{ width: (progress * 100) + "%", backgroundColor: settings.barColor }} />
    </div>
  </div>;
}