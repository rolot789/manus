# CKA 실전 연습 과제

## 1) Cluster Architecture, Installation & Configuration
- 특정 버전으로 클러스터 업그레이드(마이너 버전 규칙 준수)
- kubeadm으로 워커 노드 조인/제거
- etcd 스냅샷 백업 및 복구

## 2) Workloads & Scheduling
- taint/toleration으로 워크로드 격리
- nodeAffinity + podAntiAffinity 조합 배치
- Job, CronJob 생성 및 실패 재시도 정책 검증

## 3) Services & Networking
- ClusterIP/NodePort/LoadBalancer 차이 실습
- Ingress 리소스 + path 기반 라우팅
- NetworkPolicy로 네임스페이스 간 통신 제한

## 4) Storage
- StorageClass 생성(동적 프로비저닝)
- PVC 확장/축소 시나리오 점검
- StatefulSet + 볼륨 보존 정책 이해

## 5) Troubleshooting
- CrashLoopBackOff 원인 분석
- DNS 해석 오류(CoreDNS) 진단
- Control Plane 컴포넌트 로그 분석

## 타임어택 팁
- 각 문제를 15~20분으로 제한
- `kubectl explain` 적극 활용
- yaml 직접 작성보다 `--dry-run=client -o yaml` 활용
- 풀이 후 반드시 `kubectl get events -A --sort-by=.lastTimestamp`로 이벤트 확인
