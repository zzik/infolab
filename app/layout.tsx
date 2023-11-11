import type { Metadata } from 'next'
import styles from './root.module.scss'

export const metadata: Metadata = {
  title: 'infoLAB',
  description: 'Zakoračite sa nama u digitalno doba softverskog inžinjerstva',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={styles.root} style={{width:'100vw'}}>{children}</body>
    </html>
  )
}
