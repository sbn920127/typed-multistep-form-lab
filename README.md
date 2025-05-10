# typed-multistep-form-lab

一個專注於 TypeScript 型別建模與 React 表單實作的練習專案。

## 練習目標

本專案目的是透過「多步驟註冊表單」的實作，強化以下技能：

-  使用泛型建模表單欄位與錯誤狀態
-  建立可重用的 React 表單元件 Props 型別
-  模擬 API 回傳結構並設計對應型別
-  運用條件型別、Mapped Type、工具型別做資料轉換

## 使用技術

- Vite + React + TypeScript
- 無使用外部表單函式庫（手刻控制）
- 未連接真實後端，重點在前端型別設計與資料流程

## 專案架構簡介

```bash
src/
├── components/     # 表單步驟元件
├── hooks/          # 自訂 Hook（表單流程控制）
├── types/          # 型別定義區（form.ts、api.ts）
├── utils/          # 型別工具函式
