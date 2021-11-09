<ng2-smart-table #ng2TbUser 
  [settings]="tbUserConfig" 
  [source]="tbUserData" 
  (edit)="openModalUser($event)" 
  (delete)="openModalExclusion($event)">          
</ng2-smart-table>
